let DummyShoppingList = [
	{
		item: "Banana",
		price: 2,
		kg: 1,
	},
	{
		item: "Apple",
		price: 2.5,
		kg: 2,
	},
	{
		item: "Carrot",
		price: 1,
		kg: 3,
	},
	{
		item: "Onion",
		price: 1.5,
		kg: 5,
	},
];
let editIndex = -1;
function renderList() {
	const shoppingListElement = document.getElementById("shopping-list");
	shoppingListElement.innerHTML = "";

	DummyShoppingList.forEach((item, index) => {
		const listItem = document.createElement("li");
		listItem.textContent = `${item.item}: $${item.price} per kg, ${item.kg} kg`;
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.onclick = () => {
			deleteItem(index);
		};
		const editButton = document.createElement("button");
		editButton.className = "edit-button";
		editButton.textContent = "Edit";
		editButton.onclick = () => {
			editItem(index);
		};
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);
		shoppingListElement.appendChild(listItem);
	});
}

function addItem() {
	const itemInput = document.getElementById("item");
	const priceInput = document.getElementById("price");
	const kgInput = document.getElementById("kg");

	const item = itemInput.value;
	const price = parseFloat(priceInput.value);
	const kg = parseFloat(kgInput.value);

	if (!item || isNaN(price) || isNaN(kg)) {
		alert("Please fill out all fields!");
		return;
	}
	if (editIndex === -1) {
		// adding a new item
		DummyShoppingList.push({ item, price, kg });
	} else {
		// updating the item
		DummyShoppingList[editIndex] = { item, price, kg };
		editIndex = -1;
	}

	itemInput.value = "";
	priceInput.value = "";
	kgInput.value = "";
	renderList();
}

function deleteItem(index) {
	DummyShoppingList.splice(index, 1);
	renderList();
}

function editItem(index) {
	const item = DummyShoppingList[index];
	document.getElementById("item").value = item.item;
	document.getElementById("price").value = item.price;
	document.getElementById("kg").value = item.kg;
	editIndex = index;
}

renderList();
