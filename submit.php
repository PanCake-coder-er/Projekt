<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Konfiguracja bazy danych (VM2)
$host = '192.168.8.197';
$dbname = 'firma';
$user = 'admin';
$pass = 'TwojeHaslo123!'; // zmień na swoje hasło

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents('php://input'), true);

    $stmt = $pdo->prepare("INSERT INTO tickets (imie, nazwisko, email, opis) VALUES (?, ?, ?, ?)");
    $stmt->execute([
        $data['imie'],
        $data['nazwisko'],
        $data['email'],
        $data['opis']
    ]);

    echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
