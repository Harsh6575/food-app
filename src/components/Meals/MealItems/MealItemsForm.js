import Input from '../../UI/Input';
import './MealItemsForm.css';

const MealItemsForm = (props) => {
    return(
        <form className='form'>
            <Input
    label='Amount'
    input={{
        id: 'amount_' + props.id, // this changed!
        type: 'number',
        min: '0',
        max: '10',
        step: '1',
        defaultValue: '0',
    }}
/>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemsForm;