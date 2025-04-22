'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";


const schema = yup.object({
    BrandName: yup.string().required("Your Brand/organisation name is required"),
    Country: yup.string().required('Select your country'),
    Category: yup.string().required('Select the correct category'),
    Subcategory: yup.string().required('Select the correct subcategory'),
    BrandTags: yup.array().min(1, 'Select at least one brand tag')
});

function BasicInfoForm() {
    const [tags, setTags] = useState([]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        data.BrandTags = tags;
        console.log('Submitted data:', data);
    };

    const handleSelect = (e) => {
        const value = e.target.value;

        if (value && !tags.includes(value)) {
            const newTags = [...tags, value];
            setTags(newTags);
            setValue('BrandTags', newTags);
        }

        e.target.value = '';
    };

    const removeTag = (tag) => {
        const newTags = tags.filter(t => t !== tag);
        setTags(newTags);
        setValue('BrandTags', newTags);
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen gap-4 '>
                <div className='mr-64'>
                    <h1 className='text-2xl text-[#644FC1] mb-5'>Basic info</h1>
                    <h3  className='text-[#505050] font-bold text-3xl mb-2.5'>Tell about your Brand/organization</h3>
                    <span className='text-[#505050] font-light'>Provide an overview of the brand or organization you want to register on 3F.</span>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-12'>
                        <div className='grid gap-0.5 '>

                            <div className='flex justify-between'>
                                <label className='text-[#444444] text-[13px] font-light'>Brand Name</label>

                                <div className='text-red-500'>
                                    *
                                </div>
                            </div>
                            <input className='border border-[#8D75F7] w-96 h-8 focus:outline-0 rounded  font-light text-[14px]' type="text" {...register('BrandName')} />
                            <p className='text-[#dc3545] font-light text-[12px]'>{errors.BrandName?.message}</p>
                        </div>

                        <div className='grid gap-0.5 '>

                            <div className='flex justify-between'>
                                <label className='text-[#444444] text-[13px] font-light'>Country</label>

                                <div className='text-red-500'>
                                    *
                                </div>
                            </div>
                            <select className='border border-[#8D75F7] w-96 h-8 focus:outline-0 rounded font-light text-[14px] ' {...register('Country')}>
                                <option className='text-[#959595] font-light' value=""></option>
                                <option className='text-[#959595] font-light' value="Iran">Iran</option>
                                <option className='text-[#959595] font-light' value="USA">USA</option>
                            </select>

                            <p className='text-[#dc3545] font-light text-[12px]'>{errors.Country?.message}</p>
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <div className='grid gap-0.5 mr-5'>

                            <div className='flex justify-between'>
                                <label className='text-[#444444] text-[13px] font-light'>Category</label>
                                <div className='text-red-500'>
                                    *
                                </div>
                            </div>
                            <select className='border border-[#8D75F7] w-96 h-8 focus:outline-0 rounded  font-light text-[14px]' {...register('Category')}>
                                <option className='text-[#959595] font-light' value="">Select category</option>
                                <option className='text-[#959595] font-light' value="Clothing">Clothing</option>
                                <option className='text-[#959595] font-light' value="Electronics">Electronics</option>
                            </select>
                            <p className='text-[#dc3545] font-light text-[12px]'>{errors.Category?.message}</p>
                        </div>

                        <div className='grid gap-1'>
                            <div className='flex justify-between'>
                                <label className='text-[#444444] text-[13px] font-light'>Subcategory</label>
                                <div className='text-red-500'>
                                    *
                                </div>
                            </div>
                            <select className='border border-[#8D75F7] w-96 h-8 focus:outline-0 rounded  font-light text-[14px]' {...register('Subcategory')}>
                                <option className='text-[#959595] font-light' value="">Select subcategory</option>
                                <option className='text-[#959595] font-light' value="Shoes">Shoes</option>
                                <option className='text-[#959595] font-light' value="Phones">Phones</option>
                            </select>
                            <p className='text-[#dc3545] font-light text-[12px]'>{errors.Subcategory?.message}</p>
                        </div>
                    </div>

                    <div className='grid gap-0.5'>

                        <div className='flex justify-between'>
                            <label className='text-[#444444] text-[13px] font-light'>Brand Tags</label>
                            <div className='text-red-500'>
                                *
                            </div>
                        </div>
                        <select className='border border-[#8D75F7] h-8 focus:outline-0 rounded  font-light text-[14px]' onChange={handleSelect}>
                            <option className='text-[#959595] font-light' value="">Select tag</option>
                            <option className='text-[#959595] font-light' value="Fashion">Fashion</option>
                            <option className='text-[#959595] font-light' value="Tech">Tech</option>
                            <option className='text-[#959595] font-light' value="Beauty">Beauty</option>
                        </select>
                        <p className='text-[#dc3545] font-light text-[12px]'>{errors.BrandTags?.message}</p>


                        <div className='flex gap-2 font-light'>
                            {tags.map((tag) => (
                                <div className='flex items-center gap-1 px-2 py-1 bg-[#E7E7E7] text-[#717171] rounded-full text-sm' key={tag}>
                                    {tag}
                                    <button type="button" onClick={() => removeTag(tag)}>x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='grid mr-[689px]'>
                        <input type="checkbox" className='checkbox checked:border-2 mb-5 w-5 h-5 checked:bg-[#644FC1] mt-4' />
                        <button className='bg-[#644FC1] text-white rounded w-[119px] h-[39px] font-light cursor-pointer' type="submit">Continue</button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default BasicInfoForm;
