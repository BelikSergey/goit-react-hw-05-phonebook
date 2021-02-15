import styles from '../../App.module.css'
const Filter = ({ filter, onChange }) => {
  // console.log('click');
  return (
    <input className={styles.FormInput}
      type="text"
      name="filter"
      value={filter}
      placeholder="Search by contacts"
      onChange={({ target }) => onChange(target.value)}
    />
  );
};
export default Filter;

