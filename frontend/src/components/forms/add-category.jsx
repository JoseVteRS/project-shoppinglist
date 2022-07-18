

import { useForm } from 'react-hook-form'
import Input from '../ui/form/input';

const AddCategoryForm = () => {
    const { register } = useForm();
    return (
        <>
            <p className='font-semibold text-xl mb-5' >Add a category</p>
            <form>
                <Input
                    register={register}
                    title="Name category"
                    placeholder="Enter a name for the category"
                    label="name"
                />
            </form>
        </>

    )
}

export default AddCategoryForm