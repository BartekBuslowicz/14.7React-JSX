var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
          <img className={'contactImage'} SRC={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
          <P className={'contactLabel'}>iMIĘ: {this.props.item.firstName}</P>
          <P className={'contactLabel'}>Nazwisko: {this.props.item.lastName}</P>
          <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
      </div>
    );
  },
});