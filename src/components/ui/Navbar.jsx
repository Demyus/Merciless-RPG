import { useSelector } from "react-redux";

import Input from "./Input";
import RaceSelect from "./RaceSelect";


const Navbar = (props) => {
    const stats = useSelector(state => state.perks)

    const showState = () => {
        console.log(stats)
    }


    return (
        <div className="row ">
            <div className="text-center col-sm-2">
                <Input name="Character Name" field='name' />
            </div>
            <div className="text-center col">
                <Input name="Age" field='age' />
            </div>
            <div className="text-center col">
                <Input name="Height" field='height' />
            </div>
            <div className="text-center col-sm-2">
                <label data-for="char_race">Race</label>
                <RaceSelect></RaceSelect>
            </div>
            <div className="text-center col px-0">
                <Input name="Religion" field='religion' />
            </div>
            <div className="text-center col pe-0">
                <Input name="Sex" field='sex' />
            </div>
            <div className="text-center col pe-0">
                <Input name="Weight" field='weight' />
            </div>
            <div className="text-center col pe-0">
                <Input name="EXP" field='exp' />
            </div>
            <div className="col text-center d-grid">
                
                <label data-for="">Journal</label>
                <button data-bs-toggle="modal" data-bs-target="#journal" className="btn btn-success btn-sm"><i className="bi-pencil-square"></i></button>
            </div>
            <div className="col-sm-2 text-center  pe-xxl-5">
                <label data-for="">Last Save: lastsave</label><br />
                <div className="d-flex justify-content-around">
                    <button className="btn btn-sm btn-primary" click="savedata()" onClick={showState}>Save</button>
                    <button className="btn btn-sm btn-dark" click="loadlast()">Load</button>
                    <button className="btn btn-sm btn-danger" click="clearlocal()">Delete</button>
                    <button className="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#settings"><i className="bi-gear-fill"></i></button>
                    <button className="btn btn-danger btn-sm"><i className="bi bi-unlock-fill"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;