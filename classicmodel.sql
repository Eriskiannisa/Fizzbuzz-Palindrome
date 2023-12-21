127.0.0.1/classicmodels/orders/		http://localhost/phpmyadmin/index.php?route=/table/sql&db=classicmodels&table=orders

   Showing rows 0 -  5 (6 total, Query took 0.0062 seconds.)


SELECT
    o.customerNumber,
    c.productLine,
    COUNT(od.productCode) AS totalProductLines
FROM
    orders o
JOIN
    orderdetails od ON o.orderNumber = od.orderNumber
JOIN
    products c ON od.productCode = c.productCode
WHERE
    c.productLine = 'Classic Cars'
GROUP BY
    o.customerNumber, c.productLine
HAVING
    totalProductLines > 23;


customerNumber	productLine	totalProductLines	
124	Classic Cars	67	
141	Classic Cars	106	
151	Classic Cars	34	
276	Classic Cars	24	
298	Classic Cars	31	
323	Classic Cars	24	
