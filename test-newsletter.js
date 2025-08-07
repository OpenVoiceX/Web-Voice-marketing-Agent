// Comprehensive Test Script for Enhanced Newsletter API
// Run this in browser console at http://localhost:3001

const BASE_URL = window.location.origin;

const testNewsletter = async (email, testName) => {
  console.log(`\n🧪 Testing: ${testName}`);
  console.log(`📧 Email: ${email}`);
  
  try {
    const response = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    
    console.log(`📊 Status: ${response.status}`);
    console.log(`📄 Response:`, data);
    
    // Log rate limit headers if present
    if (response.headers.has('X-RateLimit-Remaining')) {
      console.log(`⏱️  Rate Limit Remaining: ${response.headers.get('X-RateLimit-Remaining')}/5`);
      console.log(`🔄 Rate Limit Reset: ${new Date(parseInt(response.headers.get('X-RateLimit-Reset')) * 1000).toLocaleTimeString()}`);
    }
    
    if (response.ok) {
      console.log('✅ Success:', data.message);
    } else {
      console.log('❌ Error:', data.error);
    }
    
    return { success: response.ok, data, status: response.status };
  } catch (error) {
    console.error('🚨 Network Error:', error);
    return { success: false, error: error.message };
  }
};

const testHealthCheck = async () => {
  console.log('\n🔍 Testing API Health Check');
  try {
    const response = await fetch(`${BASE_URL}/api/newsletter`);
    const data = await response.json();
    console.log('📊 Health Status:', data);
    return response.ok;
  } catch (error) {
    console.error('🚨 Health Check Failed:', error);
    return false;
  }
};

const runComprehensiveTests = async () => {
  console.log('🚀 Starting Comprehensive Newsletter API Tests...');
  
  // Health Check
  await testHealthCheck();
  
  // Test Cases
  const tests = [
    { email: 'test@example.com', name: 'Valid Email - First Subscription' },
    { email: 'test@example.com', name: 'Duplicate Email Test' },
    { email: 'invalid-email', name: 'Invalid Email Format' },
    { email: '', name: 'Empty Email' },
    { email: '   test2@example.com   ', name: 'Email with Whitespace' },
    { email: 'test@disposable.10minutemail.com', name: 'Disposable Email Test' },
    { email: 'very.long.email.address.that.might.be.too.long@example.com', name: 'Long Email Test' },
    { email: 'test3@example.com', name: 'Another Valid Email' },
  ];
  
  const results = [];
  
  for (const test of tests) {
    const result = await testNewsletter(test.email, test.name);
    results.push({ ...test, ...result });
    
    // Add delay between requests to see rate limiting in action
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Rate Limiting Test - Send multiple rapid requests
  console.log('\n⚡ Testing Rate Limiting with Rapid Requests...');
  const rapidTests = [];
  for (let i = 0; i < 8; i++) {
    rapidTests.push(testNewsletter(`rapid${i}@example.com`, `Rapid Request ${i + 1}`));
  }
  
  const rapidResults = await Promise.all(rapidTests);
  
  // Summary
  console.log('\n📈 Test Summary:');
  console.log('====================');
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.name}: ${result.success ? 'PASSED' : 'FAILED'} (${result.status || 'ERROR'})`);
  });
  
  console.log('\n⚡ Rate Limiting Results:');
  rapidResults.forEach((result, index) => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} Rapid Request ${index + 1}: ${result.success ? 'PASSED' : 'FAILED'} (${result.status || 'ERROR'})`);
  });
  
  return { tests: results, rapidTests: rapidResults };
};

// Auto-run tests
console.log('Newsletter API Testing Suite Loaded!');
console.log('Run: runComprehensiveTests() to start all tests');
console.log('Run: testNewsletter("email@example.com", "Test Name") for individual tests');
console.log('Run: testHealthCheck() for health check only');

// Uncomment the line below to auto-run tests
// runComprehensiveTests();
