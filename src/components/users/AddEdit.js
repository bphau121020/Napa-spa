import FormItem from "./FormItem";

AddEdit.propTypes = {}
function AddEdit(props){
    const handleSubmit = (values) => {
      console.log(values)
    }
    return (
        <div>
            <FormItem onSubmit={handleSubmit}/>
        </div>
    )
}
export default AddEdit;
