
// import iconMenu1 from '../../assets/icon-menu1.png'

const ListItem = ({title, description, onClick }) => {
  // const {item} = props;
  // console.log("item:"+ item.title);
    return (
      <div className="hover:cursor-pointer bg-white p-2 rounded shadow flex flex-col items-center" onClick={onClick}>
        <img className="mt-2 w-[40px] h-[40px]" src={title}/>
        <p className="text-base text-center">{description}</p>
      </div>
    );
  };
  export default ListItem;