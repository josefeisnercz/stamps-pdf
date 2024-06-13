exports.handler = async function(event, context) {
    const correctPassword = 'yourpassword'; // Replace with your secure password
    const { password } = JSON.parse(event.body);

    if (password === correctPassword) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true })
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: false })
        };
    }
};
