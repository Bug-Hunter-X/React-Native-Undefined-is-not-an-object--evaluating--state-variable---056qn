```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {/* Use optional chaining and nullish coalescing to handle potential undefined values */}
      <Text>{data?.name ?? 'Loading...'}</Text> 
      <Text>{data?.description ?? ''}</Text>      
    </View>
  );
};

export default MyComponent;
```