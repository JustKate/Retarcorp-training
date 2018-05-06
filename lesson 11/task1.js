'use strict';
class Product {
    constructor(name,price,type,date)
    {
        this.id = Product.incrementId();
        this.price=price;
        this.type=type;
        this.date=date;
        this.name=name;

    }
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
      }
}

class FoodProduct extends Product{
    constructor(name,price,type,date,expiryDate){
        super(name,price,type,date);
        this.expiryDate=expiryDate;
      
    }
    get bestBefore(){
        return Math.round(Math.abs((Date.now() - this.expiryDate.getTime())/(24*60*60*1000)));
    }
}

class Shop{
    constructor(shopName, address,markup,income,productList){
        this.shopName=shopName;
        this.address=address;
        this.markup=markup;
        this.income=income;
        this.productList=productList;
    }
    get totalProductPrice(){
        return this.productList.forEach(function(item){return item.price.reduce(function(pValue,cValue){
            return pValue+cValue;
        } ) })
    }
    addProduct(prod,n){
        for(var i=0;i<n;i++){
            this.productList.push(prod);
        }
    }
    deleteProductById(e){
        var id=parseInt(e.currentTarget.getAttribute("data"));
        var index=this.productList.indexOf(this.productList.find((item)=>item.id==id));
        this.productList.splice(index,1);
        e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);

    }
    
    sellProduct(e){
        var id=parseInt(e.currentTarget.getAttribute("data"));
        var index=this.productList.indexOf(this.productList.find((item)=>item.id==id));
        var price=parseInt(this.productList.find((item)=>item.id==id).price);
        var markup=parseInt(this.markup);
        var prodInc=Math.round(price*markup/100);
        this.income=this.income+prodInc;
        this.productList.splice(index,1);
        e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
        document.getElementById(this.shopName+"_incomeInfo").innerText=" income: "+this.income;
    }

    infoAboutShop(shop){
     
      
        if(document.getElementsByClassName("shop_info").length===2)
        {
            document.getElementsByClassName("shop_info")[0].parentNode.removeChild( document.getElementsByClassName("shop_info")[0]);
        }

        var info=document.createElement("div");
        //info.setAttribute("id","info_shops");
        info.classList.add("shop_info")
        var name=document.createElement("h2");
        name.innerText=shop.shopName;
        var shopInfo=document.createElement("h2");
        var incomeInfo=document.createElement("h2");
        incomeInfo.setAttribute("id",shop.shopName+"_incomeInfo")
        shopInfo.innerText="address: "+shop.address+" markup: "+shop.markup;
        incomeInfo.innerText=" income: "+shop.income;
        info.appendChild(name);
        info.appendChild(shopInfo);
        info.appendChild(incomeInfo);
        var prodListInfo=document.createElement("ul");
        for(var prod in shop.productList){
            var liItem=document.createElement("li");
            
            var deleteBtn=document.createElement("input");
            deleteBtn.setAttribute("type","button");
            deleteBtn.setAttribute("value","delete");
            deleteBtn.setAttribute("data",shop.productList[prod].id);
            deleteBtn.addEventListener("click",shop.deleteProductById.bind(this));

            var buyBtn=document.createElement("input");
            buyBtn.setAttribute("type","button");
            buyBtn.setAttribute("value","buy");
            buyBtn.setAttribute("data",shop.productList[prod].id);
            buyBtn.addEventListener("click",shop. sellProduct.bind(this));

            var text= "Product name: "+shop.productList[prod].name+" product price: "+shop.productList[prod].price+" Product id: "+shop.productList[prod].id; 
            var  itemText = document.createTextNode(text);
            liItem.appendChild(itemText);
            liItem.appendChild(deleteBtn);
            liItem.appendChild(buyBtn);
            prodListInfo.appendChild(liItem);
        }
        info.appendChild(prodListInfo);
        document.getElementsByClassName("content")[0].appendChild(info);
        
    }
}

class ShoppingCenter 
{ 
    constructor(shopList){
    this.shopList=shopList;
    }

    showShopList(){
     for(var shop in this.shopList){
            this.shopList[shop].infoAboutShop(this.shopList[shop])
        }
    }

    viewStatistic(){
        var statisticList=document.createElement("ul");
        for(var shop in this.shopList){
            var liStatistic=document.createElement("li");
            var text= "Shop name: "+this.shopList[shop].shopName+" income: "+this.shopList[shop].income; 
            var  itemText = document.createTextNode(text);
            liStatistic.appendChild(itemText);
            statisticList.appendChild(liStatistic)
        }
        document.getElementsByClassName("content")[0].appendChild(statisticList);
    }
}


(function(){
//Products
var headphones= new Product ("sennheiser",100,"headphones",new Date(2017, 0, 1));
var phone = new Product ("sony",700,"smartPhone",new Date(2016, 0, 1));
var ProductList=new Array();
ProductList.push(headphones);
ProductList.push(phone);
ProductList.push(phone);
//FoodProducts
var pineapple = new FoodProduct("pineapple",4,"fruit",new Date(2018, 3, 20),new Date(2018, 4, 0) );
var chocolate=new FoodProduct("chocolate",2,"sweets",new Date(2018, 2, 20),new Date(2018, 5, 0) );
var FoodProductsList=new Array();
FoodProductsList.push(pineapple);
FoodProductsList.push(chocolate);
//Shops
var mediaMarket =new Shop("MediaMarket","Pl Warsaw",5,1000,ProductList);
var auchan=new Shop("Auchan","Pl Bialystok",3,900,FoodProductsList);
//ShoppingCenter 
var StoreList=new Array()
StoreList.push(mediaMarket);
StoreList.push(auchan);
//__proto__

var ShoppingMall=new ShoppingCenter(StoreList);

//Why we can't write like this document.getElementById("view_shopList").addEventListener("click",ShoppingMall.showShopList);  ???
document.getElementById("view_shopList").addEventListener("click",function(){ShoppingMall.showShopList();});
//document.getElementById("view_statistics").addEventListener("click", function(){ShoppingMall.viewStatistic();});

document.getElementById("asfoodProduct").addEventListener("change", function(){ 
     if(this.checked) {
        document.getElementById("exDate").disabled = false;
        document.getElementById("asfoodProduct").value=true;
    } else {
        document.getElementById("exDate").disabled = true;
        document.getElementById("asfoodProduct").value=false;
    }})

document.getElementById("addNewProd").addEventListener("click",function(){
    var shopName=document.getElementById("shop_name").value;
    var prodName=document.getElementById("name").value;
    var num=parseInt(document.getElementById("number").value);
    var prodPrice=document.getElementById("price").value;
    var prodType=document.getElementById("type").value;
    var prodDate=new Date(document.getElementById("date").value);
    var prodEXDate=new Date(document.getElementById("exDate").value);
    var shop=StoreList.find(function(item){return item.shopName===shopName});
    if(document.getElementById("asfoodProduct").value==='true'){
        var newFoodProd=new FoodProduct(prodName,prodPrice,prodType,prodDate,prodEXDate);
        shop.addProduct(newFoodProd,num);
    }else{
        var newProd=new Product(prodName,prodPrice,prodType,prodDate);
        shop.addProduct(newProd,num);
    }
})
})();
