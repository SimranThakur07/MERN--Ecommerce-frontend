import React from "react";
import '../../styles/Review.css'
import img from '../../assest/random.jpeg'
const Review = () => {
  return (
    <>
      <div className=" col-lg-11 col-12 m-auto ">
        <div className="review-header d-flex justify-content-center align-items-center py-3 flex-wrap ">
          <button className="mx-2 ">Description</button>
          <button className="mx-2 ">Specification</button>
          <button className="mx-2 ">Comments</button>
          <button className="mx-2 ">Reviews</button>
        </div>
        <div className="description-card card d-none">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum at nostrum fugit itaque blanditiis minus assumenda laboriosam, harum illum ipsum exercitationem tempora error? Omnis quam quo numquam minima assumenda exercitationem, quia distinctio aspernatur nihil, aperiam voluptas vero nisi veritatis autem cupiditate deleniti perferendis neque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem voluptate sint sed? Aperiam tempore ratione nesciunt libero? Ea mollitia qui tempore consequuntur consectetur architecto perferendis nam provident error vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptate ipsum deleniti inventore ipsam enim ut libero quod vel consequuntur ad voluptas non impedit laudantium, alias obcaecati, excepturi, adipisci necessitatibus. </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam velit dolor iste molestiae maiores sapiente in possimus perspiciatis? Nemo minus nostrum magnam vero rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque dolor sequi eveniet! Doloribus, mollitia.
            </p>
        </div>
        <div className="specification-card card p-4 border-top-0 d-none">
            <table className="w-100">
                <tr>
                    <td>Width</td>
                    <td>128mm</td>
                </tr>
                
                <tr>
                    <td>Height</td>
                    <td>128mm</td>
                </tr>
              
                <tr>
                    <td>Depth</td>
                    <td>128mm</td>
                </tr>
               
                <tr>
                    <td>Weight</td>
                    <td>52gm</td>
                </tr>
               
                <tr>
                    <td>Quality checking</td>
                    <td>Yes</td>
                </tr>
               
                <tr>
                    <td>Each Box contains</td>
                    <td>60pcs</td>
                </tr>
            </table>
        </div>
        <div className="comment-card card p-4 border-top-0 col-12 d-flex flex-row flex-wrap d-none">
            <div className="col-lg-6 col-sm-12 px-2">
                <div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="comment-head d-flex align-items-center">
                            <img src={img} alt=""/>
                            <div>
                                <span>Blake Ruiz</span>
                                <p>12th Feb, 2018 at 05:56 pm</p>
                            </div>
                        </div>
                        <div>
                            <button className="reply-btn">Reply</button>
                        </div>
                    </div>
                    <div>
                        <p className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cupiditate commodi repudiandae fuga beatae enim quo doloribus temporibus id, molestiae distinctio quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, architecto. </p>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="comment-head d-flex align-items-center">
                            <img src={img} alt=""/>
                            <div>
                                <span>Blake Ruiz</span>
                                <p>12th Feb, 2018 at 05:56 pm</p>
                            </div>
                        </div>
                        <div>
                            <button className="reply-btn">Reply</button>
                        </div>
                    </div>
                    <div>
                        <p className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cupiditate commodi repudiandae fuga beatae enim quo doloribus temporibus id, molestiae distinctio quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, architecto. </p>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="comment-head d-flex align-items-center">
                            <img src={img} alt=""/>
                            <div>
                                <span>Blake Ruiz</span>
                                <p>12th Feb, 2018 at 05:56 pm</p>
                            </div>
                        </div>
                        <div>
                            <button className="reply-btn">Reply</button>
                        </div>
                    </div>
                    <div>
                        <p className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cupiditate commodi repudiandae fuga beatae enim quo doloribus temporibus id, molestiae distinctio quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, architecto. </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 px-2 review-mess">
                <h5>Post a Comment</h5>
                <form action="" method="post" className="w-100">
                    <div className="mt-3">
                        <input className="p-2 w-100" type="text" placeholder="Your Full name"/>
                    </div>
                    <div className="mt-3">
                        <input className="p-2 w-100" type="text" placeholder="Mobile Number"/>
                    </div>
                    <div className="mt-3">
                        <input className="p-2 w-100" type="text" placeholder="Email Address"/>
                    </div>
                    <div className="mt-3">
                    <textarea className="p-2 w-100 " name="" id="" cols="48" rows="2" placeholder="Message" ></textarea>
                    </div>
                    <div className="mt-3 d-flex  justify-content-end ">
                    <button className="border-0 py-2 px-4 btn btn-primary ">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="comment-card card p-4 border-top-0 col-12 d-flex flex-row flex-wrap">
            <div className="col-lg-6 col-sm-12">
                <div className="d-flex justify-content-around">
                    <div className="review-box1 py-2">
                    <h4>Overall</h4>
                    <h1 className="text-primary">4.0</h1>
                   <p> (03 Reviews)</p>
                    </div>
                    <div className="review-box2">
                        <h5>Based on 3 Reviews</h5>
                        <table>
                            <tr>
                                <td>5 Star</td>
                                <td>⭐⭐⭐⭐</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td>5 Star</td>
                                <td>⭐⭐⭐⭐</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td>5 Star</td>
                                <td>⭐⭐⭐⭐</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td>5 Star</td>
                                <td>⭐⭐⭐⭐</td>
                                <td>01</td>
                            </tr>
                            <tr>
                                <td>5 Star</td>
                                <td>⭐⭐⭐⭐</td>
                                <td>01</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="comment-head d-flex align-items-center">
                            <img src={img} alt=""/>
                            <div>
                                <span>Blake Ruiz</span>
                                <p> ⭐⭐⭐⭐ </p>
                            </div>
                        </div>
                       
                    </div>
                    <div>
                        <p className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cupiditate commodi repudiandae fuga beatae enim quo doloribus temporibus id, molestiae distinctio quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, architecto. </p>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="comment-head d-flex align-items-center">
                            <img src={img} alt=""/>
                            <div>
                                <span>Blake Ruiz</span>
                                <p>⭐⭐⭐⭐</p>
                            </div>
                        </div>
                       
                    </div>
                    <div>
                        <p className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cupiditate commodi repudiandae fuga beatae enim quo doloribus temporibus id, molestiae distinctio quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, architecto. </p>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="comment-head d-flex align-items-center">
                            <img src={img} alt=""/>
                            <div>
                                <span>Blake Ruiz</span>
                                <p>⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cupiditate commodi repudiandae fuga beatae enim quo doloribus temporibus id, molestiae distinctio quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, architecto. </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 px-2 review-mess">
                <h5>Add a Review</h5>
                <p>Your Rating: ⭐⭐⭐⭐ Outstanding</p>
                <form action="" method="post" className="w-100">
                    <div className="mt-3">
                        <input className="p-2 w-100" type="text" placeholder="Your Full name"/>
                    </div>
                    <div className="mt-3">
                        <input className="p-2 w-100" type="text" placeholder="Email Address"/>
                    </div>
                    <div className="mt-3">
                        <input className="p-2 w-100" type="text" placeholder="Subject"/>
                    </div>
                    <div className="mt-3">
                    <textarea className="p-2 w-100 " name="" id="" cols="48" rows="2" placeholder="Message" ></textarea>
                    </div>
                    <div className="mt-3 d-flex  justify-content-end ">
                    <button className="border-0 py-2 px-4 btn btn-primary ">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default Review;
