import { useState,useEffect  } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'



function AppealRply() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [appealrplyList, setappealrplyList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        appelid:-1,managerid:'',replydesc:'',replydate:''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);



    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = appealrplyList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/appealrply');
            setappealrplyList(res.data);
        };
        fetchPosts();
    }, []);
    const newButton = () => {
        setCurrentItem({
            appealid:-1,managerid:'',rplydesc:'',rplydate:''
        });

        console.log(currentItem)
        setShow(true);
    }

    const editButton = (id) => {

        var index = appealrplyList.findIndex(x => x.appealid == id);
        console.log(id)
        setCurrentItem(Object.assign({}, appealrplyList[index]));
        setShow(true);

    }
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };

    const removeButton = async (id) => {

        const index = appealrplyList.findIndex(x => x.rplyid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/appealrply/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }
    const okButton = () => {
        setShow(false);
        if (currentItem.appealid == -1) {
          
            var postData = () => {
                axios.post('http://localhost:3000/Vgt/vgtserver/appealrply', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        console.log(response);
                    })
                window.location.reload();
            }
            postData();

        } else {

            var putData = async () => {
             

                await axios.put('http://localhost:3000/Vgt/vgtserver/appealrply', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } }
                )
                    .then((res) => {
                        console.log(res)
                    });
                window.location.reload();

            }
            putData();



        }


    }



    return (
        <>
            <div className="container-md ">
                <h1 className="">????????????
                    <span>
                        {/* <button className="btn-lg fs-3  button " onClick={newButton}>
                            +
                        </button> */}
                    </span>

                </h1>
                <br /><br></br>
                <main className="align-items-start ">

                    <table className="table table-bordered">
                        <thead className="listTitle  text-center ">
                            <tr>
                                <th>????????????</th>
                                <th>?????????ID</th>
                                <th>????????????</th>
                                <th>???????????? </th>
                                <th>??????|??????</th>

                            </tr>
                        </thead>
                        {currentPosts.map((val)=>(
                            <tbody className="text-center ">
                            <tr>
                                <td>{val.appealid}</td>
                                <td>{val.managerid}</td>
                                <td>{val.rplydesc}</td>
                                <td>{val.rplydate}</td>
                                <td>
                                    <button type="button" className=" btn-sm button"  onClick={()=>{editButton(val.appealid)}}>
                                        ??????
                                    </button>&ensp;
                                    <button className=" btn-sm button"  onClick={()=>{removeButton(val.rplyid)}}>??????</button>
                                </td>

                            </tr>

                        </tbody>
                        ))}
                        
                    </table>
                </main>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="listTitle" closeButton>
                    <Modal.Title>??????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="input-group mb-3">
                            <label for="">
                                <span className="input-group-text listTitle text-center" >????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="appelid" name="appelid" placeholder="?????????????????????" value={currentItem.appealid} 
                            onChange={handleChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <label for="">
                                <span className="input-group-text listTitle text-center">?????????ID:</span>
                            </label>
                            <input type="text" className="form-control" id="managerid" name="managerid" placeholder="??????????????????ID" value={currentItem.managerid} 
                            onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="rplydesc" name="rplydesc" placeholder="?????????????????????" value={currentItem.rplydesc}
                            onChange={handleChange}
                            />
                        </div>

                        {/* <div className="input-group mb-3">
                            <label for="">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="date" className="form-control" id="rplydate" name="rplydate" placeholder="?????????????????????" value={currentItem.rplydate} 
                            onChange={handleChange}
                            />
                        </div> */}




                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm button" data-bs-dismiss="modal" onClick={handleClose}>??????</button>
                    <button type="button" className="btn-sm button" onClick={okButton}>??????</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AppealRply;