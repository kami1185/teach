import React from 'react'
import './css/item.css'

const ItemsMenus = ({ color, children }) => {

    const cardStyle = {
        backgroundColor: color,
      };
    
      return (
        <div className="card-3d" style={cardStyle}> {/* Cambiamos la clase a card-3d */}
          <div className="card-content-3d"> {/* Cambiamos la clase a card-content-3d */}
            {children}
          </div>
        </div>
      );
};

export default ItemsMenus