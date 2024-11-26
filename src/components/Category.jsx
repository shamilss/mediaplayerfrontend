import React, { useEffect } from 'react'
import Videocard from './Videocard'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category(categoryDetails) {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [categoryStatus, setCategoryStatus] = useState({})
  const [deleteStatus, setDeleteStatus] = useState({})
  const [categoryUpdateStatus, setCategoryUpdateStatus] = useState([])


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleCancel = () => {
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
  console.log(categoryName);

  const handleAdd = async () => {
    if (!categoryName) {
      toast.error('Please Enter Category Name')
    }
    else {
      const reqBody = {
        category: categoryName,
        allvideos: []
      }
      console.log(reqBody);

      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Category Added Successfully')
        handleClose()
        setCategoryStatus(result)
      }
      else {
        toast.error('Something Went Wrong')
        handleCancel()
      }
    }
  }

  const getCategory = async () => {
    const result = await getCategoryApi()
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)
    }
    else {
      toast.error('Something Went Wrong')
      handleCancel()
    }

  }
  console.log(allCategory);

  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id)
    if (result.status >= 200 && result.status < 300) {
      setDeleteStatus(result)
    }
    else {
      toast.error('Something Went Wrong')
      handleCancel()
    }


  }

  useEffect(() => { getCategory() }, [categoryStatus, deleteStatus, categoryUpdateStatus,categoryDetails])

  const videoOver = (e) => {
    // preventing components from reloading
    e.preventDefault()


  }

  const videoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);
    console.log(categoryDetails);
    if (categoryDetails.allvideos.find((item) => item.id == videoDetails.id)) {
      toast.error('Video Already Added')
    }
    else {
      categoryDetails.allvideos.push(videoDetails)
      console.log(categoryDetails);
      const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCategoryUpdateStatus(result)
      }

    }
  }

  const videoDrag = (e,videoDetails,categoryDetails)=>{
    console.log(videoDetails,categoryDetails);
    const details = {videoDetails,categoryDetails}
    e.dataTransfer.setData("Details",JSON.stringify(details))
  }
  return (
    <>

      <h4 className='mt-4'>Category</h4>
      <button className='btn btn-warning mt-4 w-100' onClick={handleShow}>Add Category</button>

      {allCategory?.length > 0 ?
        allCategory?.map((item) =>
          <div className='border border-secondary p-3 rounded mt-4' droppable onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item.category}</h6>
              <button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} size="lg" onClick={() => { handleDelete(item.id) }} /></button>
            </div>

            {item?.allvideos.length > 0 &&
              item?.allvideos.map((videos) => <div className='mt-4' draggable onDragStart={(e)=>videoDrag(e,videos,item)}><Videocard videoDetails={videos} present/></div>)
            }



          </div>

        )

        :

        <h5 className='text-center text-danger mt-4'>No Categories Added Yet</h5>

      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border border-secondary'>
            <input type='text' placeholder='Enter Category Name' className='form-control rounded border border-secondary' onChange={(e) => { setCategoryName(e.target.value) }} value={categoryName}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} hideProgressBar={false} />
    </>
  )
}

export default Category