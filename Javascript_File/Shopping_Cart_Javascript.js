console.log("welcome to shopping cart javascript");
function removeProduct()
{
	removeButton=document.getElementsByClassName("removeButton");
	console.log(removeButton);
	for(var i=0; i<removeButton.length;i++)
	{
		removeButtons=removeButton[i];
		removeButtons.addEventListener("click",(event)=>
		{
			buttonClicked=event.target;
			buttonClicked.parentElement.parentElement.parentElement.remove();
			updateBill();
		})
	}
}

cartRow=document.getElementsByClassName("cartItems");
console.log(cartRow);
function updateBill()
{
	let total=0;
	console.log(total);
	cartRow=document.getElementsByClassName("cartRow");
	console.log(cartRow);
	for(i=0;i<cartRow.length;i++)
	{
		cartRows=cartRow[i];
		cartPrice=cartRows.getElementsByClassName("cartPrice")[0];	
		cartQuantityValue=cartRows.getElementsByClassName("cartQuantityValue")[0];
		price=cartPrice.innerHTML;
		price=price.replace(" ","");
        price=price.replace("₹","");
		price=parseFloat(price);
		console.log(price);
		Quantityvalue=cartQuantityValue.value;
		console.log(Quantityvalue);
		console.log(total);
		total=total+(price*Quantityvalue);
		total=Math.round(total);
		console.log(total);
	}
	document.getElementsByClassName("finalCartTotal")[0].innerHTML="₹"+total+".00";
	document.getElementsByClassName("cartTotal")[0].style=""
}

function inputValueChange()
{
	cartRows=document.getElementsByClassName("cartRow");
	for(i=0;i<cartRows.length;i++)
	{
		cartQuantityValues=cartRows[i].getElementsByClassName("cartQuantityValue")[0];
		cartQuantityValues.addEventListener("change",function()
		{
 			updateBill();
 		})
	}
}

function cartRowAdd(product_name1)
{
	cartRow=document.getElementsByClassName("cartRow");
	for(i=0;i<cartRow.length;i++)
	{
		cartRows=cartRow[i].getElementsByClassName("cart_product_name")[0];
		console.log(cartRows);
		cartTitle=cartRows.innerHTML;
		if(product_name1 === cartTitle)
		{
			alert("Product has already been added to the cart");
			return 1;
		}
	}
}
 
product_button=document.getElementsByClassName("product_button");
for(i=0;i<product_button.length;i++)
{
	 product_buttons=product_button[i];
			
	 product_buttons.addEventListener("click",function(event){
		
		console.log(event.target);
		cartInfo=event.target.parentElement.parentElement;
		console.log(cartInfo);
		imgSrc=cartInfo.getElementsByClassName("img_2")[0];
		product_name=cartInfo.getElementsByClassName("product_name")[0];
		mrpProduct=cartInfo.getElementsByClassName("mrpProduct")[0];
		value=cartRowAdd(product_name.innerHTML);
		console.log(value);
		if(value !== 1)
		{
			cartAdd=document.createElement("div");
			console.log(cartAdd);
			cartAdd.classList.add("cartRow");
			console.log(cartAdd);
			cartAdd.innerHTML=`<span class="cartItem">
					<img src=${imgSrc.src} class="productAdd"></img>
					<span class="cart_product_name">${product_name.innerHTML}</span>
				</span>
				<span class="cartPrice">
				${mrpProduct.innerHTML}
				</span>
				<span class="cartQuantity">
					<span><input type="number" min="0" value="1" class="cartQuantityValue"></span>
					<span>
						<button class="removeButton">Remove</button>
					</span>
				</span>`;
			cartItem=document.getElementsByClassName("cartItems")[0];
			cartTotal=document.getElementsByClassName("cartTotal")[0];
			cartItem.insertBefore(cartAdd,cartTotal);
		}
		removeProduct();
		updateBill();
		inputValueChange();
	 })
}

purchase_product_buttons=document.getElementsByClassName("purchase_product_button")[0];
purchase_product_buttons.addEventListener("click",function()
{
	alert("Your Items has been Purchased");
	cartRowsDel=document.querySelectorAll(".cartRow"); //we can use here document.getElementsByClassName but we need to use here Array.from() as to covert list of classes(HTML Collections) into an array.
	cartRowsDel.forEach(Cartrow=>
	{
		Cartrow.remove();
	})
	document.getElementsByClassName("finalCartTotal")[0].innerHTML="₹"+"0";
})




