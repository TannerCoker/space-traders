import React, { useState } from "react";

const RegisterForm = ({view}) => {
    const factions = ["COSMIC", "QUANTUM", "GALACTIC", "DOMINION", "ASTRO", "CORSAIRS", "VOID", "OBSIDIAN", "AEGIS", "UNITED"];
    return (
        <form>
            <div className="flex flex-col my-3">
                <label className="py-1" htmlFor="callsign">Call Sign</label>
                <input className="rounded text-black" type="text" id="callsign" name="callsign"></input>
            </div>
            <div className="flex flex-col my-3">
                <label className="" htmlFor="faction">Faction</label>
                <select className="rounded text-black" id="faction" name="faction">
                    {factions.map((faction) => {
                        return <option className="text-black" value={faction}>{faction}</option>
                    })}
                </select>
            </div>
            <div>
                <button type="reset" onClick={() => {view('')}}>Back</button>
                <button type="submit">Register</button>
            </div>
        </form>
    )
}

export default RegisterForm