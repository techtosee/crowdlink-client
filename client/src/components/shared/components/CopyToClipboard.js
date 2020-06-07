import React from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import { ParagraphButton } from '../GeneralCard';
import copy from '../../../assets/clipboard-copy.png';

// `${host}/cl/${referralLink}`
// 'copied!'
// 'there is no URL to copy!'
const CopyToClipboard = ({ condition, contentToCopy, successTxt, failureTxt }) => {
  console.log('contenttocopy', contentToCopy);
  const copyToClipboard = () => {
    console.log('CONTENT TO COPY', contentToCopy);

    if (condition) {
      const temporaryInput = document.createElement('input');
      document.body.appendChild(temporaryInput);
      temporaryInput.setAttribute('value', contentToCopy);
      temporaryInput.select();
      document.execCommand('copy');
      document.body.removeChild(temporaryInput);
      toast.success(successTxt, {
        position: 'top-center',
        transition: Slide,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn(failureTxt, {
        position: 'top-center',
        transition: Slide,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ParagraphButton onClick={copyToClipboard}>
        <img src={copy} alt="copy to clipboard button" />
      </ParagraphButton>
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default CopyToClipboard;
