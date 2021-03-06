import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'


const News=()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [vgtnewsList, setVgtnewsList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        newsid:-1, managerid: '', newstitle: '', newsdesc: '',newsdate:''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = vgtnewsList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/vgtnews');
            setVgtnewsList(res.data);
        };
        fetchPosts();
    }, []);
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    const newButton = () => {
        setCurrentItem({
            newsid:-1,managerid: '', newstitle: '', newsdesc: '',newsdate:''
        });

        console.log(currentItem)
        setShow(true);
    }
    const editButton = (id) => {

        var index = vgtnewsList.findIndex(x => x.newsid == id);
        console.log(index)
        setCurrentItem(Object.assign({}, vgtnewsList[index]));
        setShow(true);

    }
    const okButton = () => {
        setShow(false);
        if (currentItem.newsid == -1) {
           
            var postData = () => {
                axios.post('http://localhost:3000/Vgt/vgtserver/vgtnews', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        console.log(response);
                    })
                window.location.reload();
            }
            postData();

        } else {

            var putData = async () => {
              

                await axios.put('http://localhost:3000/Vgt/vgtserver/vgtnews', JSON.stringify(currentItem),
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
    const removeButton = async (id) => {

        const index = vgtnewsList.findIndex(x => x.newsid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/vgtnews/${id}`, { index },
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
                        <button className="btn-lg fs-3 button " onClick={newButton}>
                            +
                        </button>
                    </span>

                </h1>
                <br /><br></br>
                <main className="align-items-start ">

                    <table className="table table-bordered">
                        <thead className="listTitle  text-center text-nowrap ">
                            <tr>
                                <th>?????????ID</th>
                                <th>????????????</th>
                                <th>????????????</th>
                                <th>???????????? </th>
                                <th>??????|??????</th>

                            </tr>
                        </thead>
                     
                        {currentPosts.map((val)=>(
                            
                            <tbody className="text-center ">
                            <tr>
                                <td>{val.manangerid}</td>
                                <td>{val.newstitle}</td>
                                <td>{val.newsdesc}</td>
                                <td>{val.newsdate}</td>
                                <td>
                            <button type="button" className=" btn-sm button" onClick={()=>{editButton(val.newsid)}}>
                                ??????
                            </button>&ensp;
                            <button className=" btn-sm button " onClick={()=>{removeButton(val.newsid)}}>??????</button>
                           
                        </td>
                            </tr>

                        </tbody>

                        ))}
                        
                    </table>
                    <PagiNation
                        postdPerPagem={postsPage}
                        totalPosts={vgtnewsList.length}
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
                <Modal.Header className="listTitle" closeButton>
                    <Modal.Title>??????/??????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="input-group mb-3">
                            <label for="manangerid">
                                <span className="input-group-text listTitle text-center">?????????ID:</span>
                            </label>
                            <input type="text" className="form-control" name="manangerid" id="manangerid" placeholder="??????????????????ID" value={currentItem.manangerid}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="newstitle">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" name="newstitle"  id="newstitle" placeholder="?????????????????????"value={currentItem.newstitle}
                               onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="newsdesc">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text"  className="form-control" name="newsdesc"id="newsdesc" placeholder="?????????????????????" value={currentItem.newsdesc}
                               onChange={handleChange}
                            />
                        </div>
                        {/* <div className="input-group mb-3">
                            <label for="newsdate">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" name="newsdate" id="newsdate" placeholder="?????????????????????" value={currentItem.newsdate}
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


export default News;