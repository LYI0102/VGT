import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'


function ProductCmmt() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [productCmmtList, setpPoductCmmtList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
       cmmtid:-1, productid: '', vgtid: '', cmmtauth: '',cmmtdesc:'', cmmtdate: ''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = productCmmtList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/productcmmt');
            setpPoductCmmtList(res.data);
        };
        fetchPosts();
    }, []);


    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    const newButton = () => {
        setCurrentItem({
            cmmtid:-1, productid: '', vgtid: '', cmmtauth: '',cmmtdesc:'', cmmtdate: ''
        });

        console.log(currentItem)
        setShow(true);
    }
    const editButton = (id) => {

        var index = productCmmtList.findIndex(x => x.productid == id);
        console.log(index)
        setCurrentItem(Object.assign({}, productCmmtList[index]));
        setShow(true);

    }


    // const okButton = () => {
    //     setShow(false);
    //     if (currentItem.productid == -1) {
           
    //         var postData = () => {
    //             axios.post('http://localhost:3000/Vgt/vgtserver/productcmmt', JSON.stringify(currentItem),
    //                 { headers: { 'Content-Type': 'application/json' } })
    //                 .then((response) => {
    //                     console.log(response);
    //                 })
    //             // window.location.reload();
    //         }
    //         postData();

    //     } else {

    //         var putData = async () => {
              

    //             await axios.put('http://localhost:3000/Vgt/vgtserver/productcmmt', JSON.stringify(currentItem),
    //                 { headers: { 'Content-Type': 'application/json' } }
    //             )
    //                 .then((res) => {
    //                     console.log(res)
    //                 });
    //             // window.location.reload();

    //         }
    //         putData();



    //     }


    // }

    const removeButton = async (id) => {

        const index = productCmmtList.findIndex(x => x.cmmtid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/productcmmt/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }
    

    return (
        <>
            <div className="container-md ">
                <h1 className="">????????????
                    <span>
                        {/* <button className="btn-lg fs-3  button" onClick={newButton}>
                            +
                        </button> */}
                    </span>

                </h1>
                <br /><br></br>
                <main className="align-items-start ">

                    <table className="table table-bordered">
                        <thead className="listTitle text-center ">
                            <tr>
                                <th>????????????</th>
                                <th>??????ID</th>
                                <th>????????????</th>
                                <th>????????????</th>
                                <th>???????????? </th>
                                <th>??????|??????</th>

                            </tr>
                        </thead>

                        {currentPosts.map((val)=>(
                            <tbody className="text-center ">
                            <tr>
                                <td>{val.productid}</td>
                                <td>{val.vgtid}</td>
                                <td>{val.cmmtauth}</td>
                                <td>{val.cmmtdesc}?</td>
                                <td>{val.cmmtdate}</td>
                                <td>
                                    {/* <button type="button" className=" btn-sm button"  onClick={()=>{editButton(val.productid)}}>
                                        ??????
                                    </button>&ensp; */}
                                    <button onClick={()=>{removeButton(val.productid)}} className=" btn-sm button">??????</button>
                                </td>

                            </tr>

                        </tbody>


                        ))}
                        
                    </table>
                    <PagiNation
                        postdPerPagem={postsPage}
                        totalPosts={productCmmtList.length}
                        paginate={paginate}

                    />
                </main>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header  className="listTitle"  closeButton>
                    <Modal.Title>??????/??????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form action="">
                                <div className="input-group mb-3">
                                    <label for="productid">
                                        <span className="input-group-text listTitle text-center">????????????:</span>
                                    </label>
                                    <input type="text" className="form-control" name="productid" id="productid" placeholder="?????????????????????" value={currentItem.productid}
                                    onChange={handleChange}
                                    />
                                </div>
                               
                                <div className="input-group mb-3">
                                    <label for="cmmtid">
                                        <span className="input-group-text listTitle text-center">&ensp;??????ID:&ensp;</span>
                                    </label>
                                    <input type="text" className="form-control" name="cmmtid" id="cmmtid" placeholder="???????????????ID"value={currentItem.cmmtid}
                                     onChange={handleChange}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label for="cmmtauth">
                                        <span className="input-group-text listTitle text-center">????????????:</span>
                                    </label>
                                    <input type="text" className="form-control" name="cmmtauth" id="cmmtauth" placeholder="?????????????????????"value={currentItem.cmmtauth}
                                     onChange={handleChange}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label for="cmmtdesc">
                                        <span className="input-group-text listTitle text-center">????????????:</span>
                                    </label>
                                    <input type="text" className="form-control" name="cmmtdesc" id="cmmtdesc" placeholder="?????????????????????"value={currentItem.cmmtdesc}
                                     onChange={handleChange}
                                    />
                                </div>

                                {/* <div className="input-group mb-3">
                                    <label for="cmmtdate">
                                        <span className="input-group-text listTitle text-center">????????????:</span>
                                    </label>
                                    <input type="text" className="form-control" name="cmmtdate" id="cmmtdate" placeholder="?????????????????????"value={currentItem.cmmtdate}
                                     onChange={handleChange}
                                    />
                                </div> */}
                               
                           


                            </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm button " data-bs-dismiss="modal" onClick={handleClose}>??????</button>
                    {/* <button type="button" onClick={okButton} className="btn-sm button">??????</button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ProductCmmt;