import React, { useState, useEffect } from 'react';
import FaceCapture, { CAPTURE_METHOD, ERROR_CODE, FCMResult } from '@getyoti/react-face-capture';
import "@getyoti/react-face-capture/index.css";
import "@getyoti/react-face-capture/index.js";

export default function App() {
  const onSuccess = ({ img }) => {console.log("Image = ", img); console.log("Length = ", img.length)};
  const onError = (error) => console.log("Error =", error);

  return <FaceCapture onSuccess={onSuccess} onError={onError} />;
}
