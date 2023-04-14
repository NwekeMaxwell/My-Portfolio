// import React from "react";
// import "./Slider.css";

// const Slider = (largeimg, smallImg, event) => {
//   //   const changeColor = (color) => {
//   //     let colors = document.querySelectorAll(".circle");
//   //     colors.forEach((cl) => cl.classList.remove("active2"));
//   //     event.target.classList += " active2";
//   //   };

//   //   let counter = 0;
//   // let thumbNails = document.querySelectorAll(".tbcon");
//   // thumbNails[0].className += " tbnactive";

//   // const indicateActiveThumbNail = (event) => {
//   //   let clickedThumbnailId = event.target.dataset.id;
//   //   thumbNails.forEach((tb) => tb.classList.remove("tbnactive"));
//   //   if (event.target.className === "tbcon") {
//   //     event.target.classList.add("tbnactive");
//   //     counter = clickedThumbnailId;
//   //   } else if (event.target.parentNode.className === "tbcon") {
//   //     event.target.parentNode.classList.add("tbnactive");
//   //     counter = clickedThumbnailId;
//   //   } else {
//   //     thumbNails[counter].classList.add("tbnactive");
//   //   }
//   // };

//   // const changeMainThumbNail = (event) => {
//   //   largeImage.src = event.target.dataset.name;
//   //   firstBigImg.style.backgroundImage = `url(${event.target.dataset.name})`;
//   //   indicateActiveThumbNail(event);
//   // };

//   // const fwd = () => {
//   //   let imageArray = Item.itemInfo.itemImg;

//   //   if (counter >= imageArray.length - 1) {
//   //     counter = -1;
//   //   }

//   //   counter++;
//   //   largeImage.src = imageArray[counter];
//   //   firstBigImg.style.backgroundImage = `url(${imageArray[counter]})`;
//   //   thumbnailPanel.scrollLeft = thumbNails[0].clientWidth * counter;
//   //   indicateActiveThumbNail(event);
//   // };

//   // const bwd = () => {
//   //   let imageArray = Item.itemInfo.itemImg;

//   //   if (counter <= 0) {
//   //     counter = imageArray.length;
//   //   }

//   //   counter--;
//   //   largeImage.src = imageArray[counter];
//   //   firstBigImg.style.backgroundImage = `url(${imageArray[counter]})`;
//   //   thumbnailPanel.scrollLeft = thumbNails[0].clientWidth * counter;
//   //   indicateActiveThumbNail(event);
//   // };
//   return (
//     <div>
//       <h1>Slider Component</h1>
//       <div className="image">
//         <div className="img-con" id="lImg">
//           <div
//             className="img-cont"
//             id="largeImage2"
//             style={{ backgroundImage: `url(${largeimg})` }}
//           ></div>
//         </div>
//         <img src={largeimg} alt="" id="largeImage" />
//         <div className="image-thumbnail">
//           <button
//             aria-label="button"
//             aria-labelledby="button"
//             type="button"
//             id="lbtn"
//             onclick={bwd()}
//           ></button>
//           <div className="tbs" id="thumbnailPanel">
//             <div
//               class="tbcon"
//               onmouseover={changeMainThumbNail(event)}
//               data-id="1"
//             >
//               <div
//                 class="tbcon-in"
//                 onmouseover="changeMainThumbNail(event)"
//                 style={{ backgroundImage: `url(${smallImg})` }}
//               ></div>
//             </div>
//           </div>
//           <button
//             aria-label="button"
//             aria-labelledby="button"
//             type="button"
//             id="rbtn"
//             onclick={fwd()}
//           ></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
