'use client';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import AddBlogModal from './AddBlogModal';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

interface Iprops {
  blogs: IBlog[];
}

const AppTable = (props: Iprops) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { blogs } = props;
  const [action, setAction] = useState<string>('');
  const [selectedBlog, setSelectedBlog] = useState<IBlog | null>(null);
  const [id, setId] = useState<number>(0);
  const handleShowModel = (action: string, blog?: IBlog) => {
    setShowModal(true);
    setAction(action);
    if (blog) {
      setSelectedBlog(blog);
    }
  };
  const handleShowConfirm = (id: number) => {
    return () => {
      setShowConfirm(true);
      setId(id);
    };
  };
  return (
    <div>
      <div className="mt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Table content</h2>
        <Button variant="success" onClick={() => handleShowModel('add')}>
          Add Blog
        </Button>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs
            ?.sort((a, b) => b.id - a.id)
            .map((blog) => {
              return (
                <tr key={blog.id}>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  {/* <td>{blog.content}</td> */}
                  <td>
                    <Button variant="info">View</Button>

                    <Button variant="primary" className="mx-3" onClick={() => handleShowModel('edit', blog)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={handleShowConfirm(blog.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <AddBlogModal
        showModal={showModal}
        setShowModal={setShowModal}
        action={action}
        setAction={setAction}
        selectedBlog={selectedBlog}
        setSelectedBlog={setSelectedBlog}
      />
      <ConfirmModal showConfirm={showConfirm} setShowConfirm={setShowConfirm} id={id} />
    </div>
  );
};
export default AppTable;
