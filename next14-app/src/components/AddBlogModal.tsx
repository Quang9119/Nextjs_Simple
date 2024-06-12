import { use, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import { API_URL_GET_BLOGS, API_URL_POST_BLOG } from './api/api';

interface AddBlogModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
const AddBlogModal = (props: AddBlogModalProps) => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { showModal, setShowModal } = props;
  const handleClose = () => {
    setShowModal(false);
  };
  const handleClearFields = () => {
    setTitle('');
    setAuthor('');
    setContent('');
  };
  const handleSubmit = () => {
    fetch(API_URL_POST_BLOG, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success('Blog added successfully');
          mutate(API_URL_GET_BLOGS);
          handleClose();
        } else {
          toast.error('Failed to add blog');
        }
      });
  };
  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add a new blog</Modal.Title>
        <Button variant="secondary" onClick={handleClearFields} className="mx-3">
          Clear
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={6} value={content} onChange={(e) => setContent(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddBlogModal;
