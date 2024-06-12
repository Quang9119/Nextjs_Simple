'use client';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import AddBlogModal from './AddBlogModal';
import { useState } from 'react';

interface Iprops {
  blogs: IBlog[];
}

const AppTable = (props: Iprops) => {
  const [showModal, setShowModal] = useState(false);
  const { blogs } = props;
  console.log('check props: ', blogs);
  return (
    <div>
      <div className="mt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Table content</h2>
        <Button variant="success" onClick={() => setShowModal(true)}>
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
          {blogs.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                {/* <td>{blog.content}</td> */}
                <td>
                  <Button variant="info">View</Button>

                  <Button variant="primary" className="mx-3">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddBlogModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};
export default AppTable;
