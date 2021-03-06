import React, { useEffect, useState } from 'react'
import { API } from './../utils/const';
import ListProductAdmin from './../Child/ListProductAdmin';
import { deleteAPI, putAPI } from '../utils/api';
import { getAPI } from './../utils/api';


function ProductScreen() {
    const [data, setData] = useState([])
    // const { value, setValue } = useContext(ThemeContext)
    useEffect(() => {
      fetchAPI()
    }, [])
  
    const fetchAPI = async () => {
      const result = await getAPI(API)
      // check dữ dữ liệu trước khi lấy
      if (result) {
        setData(result)
      }
    }
  
    const onSubmitEdit = async (data) => {
      const response = await putAPI(`${API}/${data.id}`, data)
      if (response && response.status === 200) {
        alert("cập nhật thành công")
        // setSelectedPost(undefined)
        fetchAPI()
      }
    }
  
    const onRemove = async (id) => {
      const response = await deleteAPI(`${API}/${id}`)
      if (response && response.status === 200) {
        alert("xoá thành công")
        // load lại list
        fetchAPI()
      }
    }
  return (
    <ListProductAdmin data={data}/>
  )
}

export default ProductScreen