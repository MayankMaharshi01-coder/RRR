import { useState } from 'react'
import Input from './Input'
import DropDown from './DropDown'
import { Icon } from "@iconify/react";
import Form from './Form'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { postProduct } from './api'
import Textarea from './Textarea'
import FormButton from './FormButton'




function ProductUploadForm() {

const [focus, setFocus] = useState()

  const validationSchema = Yup.object({
    thumbnail: Yup.mixed().required('Image is required'),
    title: Yup.string().required('Title is required'),
    condition: Yup.string().oneOf(['good', 'avarage', 'nice'], 'Select a valid condition').required('Condition is required'),
    description: Yup.string().required('Description is required'),
    incharge: Yup.string().required('Incharge Name is required'),
    images: Yup.array().min(1, 'At least one image is required'),
    category: Yup.string().required('Category is required'),
  });


  const formik = useFormik({
    initialValues: {
      thumbnail: null,
      title: '',
      incharge: '',
      category: '',
      date: '',
      condition: 'condition',
      images: [],
      description: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const data = new FormData();
      data.append('thumbnail', values.thumbnail);
      data.append('title', values.title);
      data.append('incharge', values.incharge);
      data.append('category', values.category);
      data.append('condition', values.condition);
      data.append('description', values.description);
      const promise = postProduct(data);
      promise.then(responseData => {
        console.log('Response data after submission', responseData);
      }).catch(error => {
        console.error('Error during submission', error);
      });
      console.log('Form data', data, values.title);
    }
  })

    const handleFileChange = (event) => {
        formik.setFieldValue('thumbnail', event.currentTarget.files[0]);
    };

    const handleImagesChange = (event) => {
        formik.setFieldValue('images', Array.from(event.currentTarget.files));
    }

    const removeImages = (index) => {
      const updatedImages = formik.values.images.filter((_, i) => i !== index);
      formik.setFieldValue('images', updatedImages);
    }

  return (
    <>
    <div className="bg-[#D9E4DD]  min-h-screen w-screen flex justify-center py-15 overflow-auto px-10">
      <Form onSubmit={formik.handleSubmit}>
        <h1 className='text-3xl font-bold self-start text-green-800 mb-6 border-b border-gray-300 w-full bg-[#D9E4DD] py-4 pl-8'>Upload Product Your Product</h1>
        <div className='bg-[#D9E4DD]
     inline-flex 
     w-screen
     flex-col
     md:w-[500px]
     lg:w-[600px]
     gap-6
     items-center
     px-8'>
        <Input type="file" multiple={false} touched={formik.touched.thumbnail} errors={formik.errors.thumbnail} id="thumbnail" name="thumbnail" value={formik.values.thumbnail} onChange={handleFileChange}>Upload Thumbnail</Input>
        <Input type="text" touched={formik.touched.title} errors={formik.errors.title} name="title" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" ">Title</Input>
        <Input type="text" touched={formik.touched.incharge} errors={formik.errors.incharge} name="incharge" value={formik.values.incharge} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" ">Incharge Name</Input>
        <Input type="text" touched={formik.touched.category} errors={formik.errors.category} name="category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder=" ">Product Category</Input>
        <DropDown name="condition" label="Condition" useFor="form" touched={formik.touched.condition} errors={formik.errors.condition} value={formik.values.condition} onChange={formik.handleChange}>
          <option  disabled className=" disabled:text-gray-200 bg-green-900" value="condition">Product Condition</option>
          <option  className="bg-green-900"  value="good">Good</option>
          <option  className="bg-green-900"  value="avarage">Avarage</option>
          <option  className="bg-green-900"  value="nice">Nice</option>
        </DropDown>
        <Input type="file" multiple={true} removeImages={removeImages} touched={formik.touched.images} errors={formik.errors.images} id="images" name="images" value={formik.values.images} onChange={handleImagesChange} >Upload Additional Images</Input>

   <Textarea touched={formik.touched.description} errors={formik.errors.description} name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}>Description</Textarea>
     <FormButton formik={formik}>Upload Product</FormButton>
      </div>
      </Form>
      </div>
    </>
  )
}

export default ProductUploadForm;
