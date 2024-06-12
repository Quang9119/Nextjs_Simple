'use client';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

interface Iprops {
  blogs: IBlog[];
}

const AppTable = (props: Iprops) => {
  const { blogs } = props;
  console.log('check props: ', blogs);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Content</th>
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

                <Button variant="primary" className='mx-3'>Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default AppTable;
