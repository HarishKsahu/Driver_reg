import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

function App() {
  return (
    <div className='wrapper bg-dark d-flex align-item-center justify-content-center w-100'>
      <div className='login'>
        <h3 className='mb-3'>Driver Registration Form</h3>
        <form className='needs-validation'>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='name' className='form-label'>Name</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='address' className='form-label'>Address</lebal>
            <input type="text" className='form-control' required></input>
          </div>
          <table>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='birthdate' className='form-label'>BirthDate</lebal>
                <input type="date" className='form-control' required></input>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='date registration' className='form-label'>Date Registration</lebal>
                <input type="date" className='form-control' required></input>
              </div>
            </th>
          </table>
          <table>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='phoneno' className='form-label'>Phone No.</lebal>
                <input type="number" className='form-control' required></input>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='licenseno' className='form-label'>License No.</lebal>
                <input type="number" className='form-control' required></input>
              </div>
            </th>
          </table>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='civil status' className='form-label'>Civil Status</lebal>
            <select>
              <option>
                Engineer
              </option>
              <option>
                Administrator
              </option>
            </select>
          </div>
          <table>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='tin' className='form-label'>TIN</lebal>
                <input type="number" className='form-control' required></input>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='sss' className='form-label'>SSS</lebal>
                <input type="number" className='form-control' required></input>
              </div>
            </th>
          </table>
          <h5 align="center">ASSIGNED CAR VEHICLE</h5>
          <div className='form-group was-validated mb-2'>
            <lebal htmlFor='plateno' className='form-label'>Plate No.</lebal>
            <select>
              <option>
                1020304050
              </option>
              <option>
                48398292984
              </option>
            </select>
          </div>
          <table>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='type' className='form-label'>Type</lebal>
                <select>
              <option>
                AC
              </option>
              <option>
                NON AC
              </option>
            </select>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='make' className='form-label'>Make</lebal>
                <select>
              <option>
                Audi
              </option>
              <option>
                TATA
              </option>
            </select>
              </div>
            </th>
            <th>
              <div className='form-group was-validated mb-2'>
                <lebal htmlFor='color' className='form-label'>Color</lebal>
                <select>
              <option>
                Black
              </option>
              <option>
                White
              </option>
            </select>
              </div>
            </th>
          </table>
          <table className='inpu'>
            <th><button type='submit' className='btn btn-success w-100 mt-2'>Submit</button></th>
            <th><button type='reset' className='btn btn-success w-100 mt-2'>Reset</button></th>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
