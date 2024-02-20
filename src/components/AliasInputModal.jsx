import React, { useState } from 'react';
import Modal from 'react-modal';

const AliasInputModal = ({ isOpen, onClose, onSave }) => {
    const [alias, setAlias] = useState('');

    const handleSave = () => {
        onSave(alias);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                },
                content: {
                    width: '300px',
                    height: '200px',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: '15px',
                },
            }}
        >
            <div className=''>
                <input
                    type="text"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    placeholder="Enter alias..."
                    className="w-full px-2 py-1 my-3 border rounded-md"
                />
                <button onClick={handleSave} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white rounded-md group-hover:bg-opacity-0">
                        Save
                    </span>
                </button>
                <button onClick={onClose} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white rounded-md group-hover:bg-opacity-0">
                        Cancel
                    </span>
                </button>
            </div>
        </Modal>
    );
};

export default AliasInputModal;
