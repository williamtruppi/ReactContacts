import React from "react";
import Card from "../components/Card";
import contacts from "../contacts";
import Avatar from "../components/Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar avatar="https://scontent-fco1-1.xx.fbcdn.net/v/t31.18172-8/10549185_10205353665472078_3672632789280893624_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wDkuWsYoAGsAX_2CsRu&_nc_ht=scontent-fco1-1.xx&oh=0edaa43eceea449ca6c39280e2f9f247&oe=609D1DFB" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
