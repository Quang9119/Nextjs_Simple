import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { API_URL_DELETE_BLOG, API_URL_GET_BLOGS } from './api/api';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
interface ConfirmModalProps {
  showConfirm: boolean;
  setShowConfirm: (value: boolean) => void;
  id: number;
}
function ConfirmModal(props: ConfirmModalProps) {
  const { showConfirm, setShowConfirm, id } = props;
  const handleClose = () => {
    setShowConfirm(false);
  };
  const handleDelete = (id: number) => {
    fetch(API_URL_DELETE_BLOG + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success('Blog deleted successfully');
          mutate(API_URL_GET_BLOGS);
          handleClose();
        } else {
          toast.error('Failed to delete blog');
        }
      });
  };
  return (
    <>
      <Modal show={showConfirm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this blog?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDelete(id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
