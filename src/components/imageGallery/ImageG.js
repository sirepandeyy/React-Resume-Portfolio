import React, { Component } from 'react';
import Gallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './ImageG.css'

const ImageG=(props)=> {

    const images = {
        image:'https://images.unsplash.com/photo-1445953993297-28dff00088f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzdGVsbGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60lala.jpg',
        image:'https://images.unsplash.com/photo-1445953993297-28dff00088f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzdGVsbGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60lala.jpg',
        image:'https://images.unsplash.com/photo-1445953993297-28dff00088f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzdGVsbGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60lala.jpg',
        image:'https://images.unsplash.com/photo-1445953993297-28dff00088f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzdGVsbGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60lala.jpg',
        image:'https://images.unsplash.com/photo-1445953993297-28dff00088f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzdGVsbGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60lala.jpg',
        image:'https://images.unsplash.com/photo-1445953993297-28dff00088f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzdGVsbGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60lala.jpg',

    }

    const imageList = props?.images?.map((image)=>{

   return{
       original: image ,
       thumbnail: image 
   }
   
})
        return (
            <div>
                <Gallery items={imageList} showBullets showThumbnails={false} />
            </div>
        );
    }



export default ImageG;