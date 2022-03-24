import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MultisigContext } from '../context';
import { TezosAddressLink } from '../link';
import { Button } from '../button';


export function Header() {
    return (
        <header className='header-container'>
            <Navigation />
            <Wallet />
        </header>
    );
}

export function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/proposals'>Proposals</NavLink>
                </li>
                <li>
                    <NavLink to='/create'>Create proposals</NavLink>
                </li>
                {false &&
                    <li>
                        <NavLink to='/originate'>New multisig</NavLink>
                    </li>
                }
            </ul>
        </nav>
    );
}

export function Wallet() {
    // Get the multisig context
    const context = useContext(MultisigContext);

    return (
        <div>
            {/* <div className='network-selector'>
                <label className='form-input'>Network:
                    {' '}
                    <input
                        type='text'
                        list='networks'
                        spellCheck='false'
                        minLength='36'
                        maxLength='36'
                        className='contract-address-input'
                        // defaultValue={context.network}
                        value={context.network}
                        // onMouseDown={() => setContractAddress('')}
                        onChange={(e) => context.network = e.target.value }
                    />
                    <datalist id='networks'>
                        <option value='mainnet'></option>
                        <option value='hangzhounet'></option>
                    </datalist>
                </label>
            </div> */}
            <div className='sync-container'>
                {context.activeAccount &&
                    <TezosAddressLink address={context.activeAccount.address} shorten />
                }
                {context.activeAccount?
                    <Button text='unsync' onClick={() => context.disconnectWallet()} /> :
                    <Button text='sync' onClick={() => context.connectWallet()} />
                }
            </div>
        </div>
    );
}
