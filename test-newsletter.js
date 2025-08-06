// Test script for newsletter API
// Run this in browser console or use it as a reference

const testNewsletter = async (email) => {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Success:', data.message);
    } else {
      console.log('❌ Error:', data.error);
    }
    
    return data;
  } catch (error) {
    console.error('🚨 Network Error:', error);
  }
};

// Test cases
console.log('Testing newsletter API...');

// Test 1: Valid email
testNewsletter('test@example.com');

// Test 2: Invalid email
testNewsletter('invalid-email');

// Test 3: Empty email
testNewsletter('');

// Test 4: Email without domain
testNewsletter('test@');
