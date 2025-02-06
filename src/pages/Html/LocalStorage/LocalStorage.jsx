import React from 'react'

function LocalStorage() {
  return (
    <>
        <h2>LocalStorage</h2>
        <p>It is a web storage method that helps us store data on the client's computer in the form of 
            key/value pairs in a web browser. The data is stored in local storage for a lifetime unless 
            the user manually deletes it from the browser. It does not expire even when the user closes 
            the window or tab. Instead, the data remains in the browser until and unless the browser's 
            memory is cleared.
        </p>
        <ul>
            <li>
                <h3><strong>setItem()</strong></h3>
                <p>
                    We can use the setItem() method to set the data in local storage. This method takes two parameters, key and value. With this method, localStorage.setItem(key, value);
                </p>                
            </li>
            <li>
                <h3><strong>getItem()</strong></h3>
                <p>
                    To retrieve the data stored in it, we can use the getItem() method. This method takes only one parameter, i.e., the key whose value we need to access. localStorage.getItem(key)
                </p>
            </li>
            <li>
                <h3><strong>removeItem()</strong></h3>
                <p>
                    We can remove the data with the help of the removeItem() method, which is stored in memory about the key. local Storage removeItem(key)
                </p>
            </li>
            <li>
                <p>
                    The clear() method is used to clear all the data stored in it.
                </p>
            </li>
        </ul>
    </>
  )
}

export default LocalStorage