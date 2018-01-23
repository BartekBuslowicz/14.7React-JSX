
var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '', 
  lastName: '',
  email: '',
};

 App = React.createClass({
  render: function() {
    return( <div className={'app'}>
      <h2 className={'titleForm'}>Contact form</h2>
      <ContactForm contact={contactForm}></ContactForm>
      <Contacts items={contacts}></Contacts>
    </div>);
  }
});



