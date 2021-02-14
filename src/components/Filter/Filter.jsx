const Filter = ({ filter, onChange }) => {
  // console.log('click');
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      placeholder="Search by contacts"
      onChange={({ target }) => onChange(target.value)}
    />
  );
};
export default Filter;

// componentDidMount() {
//   console.log('компонент смонтирован');
//  if(localStorage.getItem("contacts")){
//   const contacts = JSON.parse(localStorage.getItem("contacts"));
//   // console.log(contacts);
//   this.setState({ contacts: contacts });
//  };
// }

// componentDidUpdate(prevProps, prevState) {
//   // console.log('компонент обновился');
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }
