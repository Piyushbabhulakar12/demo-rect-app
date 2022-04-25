import React from 'react';
import video1 from "./bg_video.mp4";
import video2 from "./bg_video1.mp4";

function Heroslider() {
    return (
      <div>
         
         <div class="container mt-5">
         <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel" data-bs-interval="false">
            <div class="carousel-inner">
               <div class="carousel-item active">
               
            

               <video src={video1} width="100%" height="700" autoPlay={"autoplay"} muted loop class="video_fit" />


               </div>
            <div class="carousel-item">

            <video src={video2} width="100%" height="700" autoPlay={"autoplay"} muted loop class="video_fit" />

            </div>
            <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1495476479092-6ece1898a101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="image_height d-block w-100" alt="..." />
            </div>
        </div>
          
    
        </div>  
        </div>

        <div class="container">
           <div class="row">
              <div class="col-md-8">
               
              </div>
              <div class="col-md-4 col-12">
              
               
               <div class="bg_color slider_text_box">
                  
               <div class="row">
                   <div class="col-9">
                           
                         <div class="d-flex padding_box_slider">
                          <h2 class="text_heading_text active">01</h2>
                          <p class="slider_textcolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                         </div>

                   </div>
                   <div class="col-3">
                   <div class="float-end">
                   <button class="btn btn_slider_btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button><br></br>
                   <button class="btn btn_slider_btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
                   </div>
                   </div>
               </div> 
                  
               </div>
                
              
              </div>
           </div>
           
        </div>

        


      </div>
    );
  }
  
  export default Heroslider;