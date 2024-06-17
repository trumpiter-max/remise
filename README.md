# Remise project

This is discount gathering & customize shopping experiment website.

## Table of content

- [Remise project](#remise-project)
  - [Table of content](#table-of-content)
  - [Introduction](#introduction)
  - [Get started](#get-started)
  - [Wiki](#wiki)
  - [Any problems](#any-problems)
  - [Members list](#members-list)
  - [Q \& A](#q--a)
      - [Cơ chế truy vấn trong  PostgreSQL, Mongo và mySQL. Sự khác biệt giữa SQL và NoSQL. Cách tối ưu hoá truy vấn trong cơ sở dữ liệu?](#cơ-chế-truy-vấn-trong--postgresql-mongo-và-mysql-sự-khác-biệt-giữa-sql-và-nosql-cách-tối-ưu-hoá-truy-vấn-trong-cơ-sở-dữ-liệu)
        - [PostgreSQL](#postgresql)
        - [MongoDB](#mongodb)
        - [MySQL](#mysql)
        - [Tối ưu hóa truy vấn SQL](#tối-ưu-hóa-truy-vấn-sql)
        - [Tối ưu hóa truy vấn NoSQL](#tối-ưu-hóa-truy-vấn-nosql)
      - [Nêu tiêu chí cụ thể để chọn 1 DBMS trong 1 dự án cụ thể](#nêu-tiêu-chí-cụ-thể-để-chọn-1-dbms-trong-1-dự-án-cụ-thể)
        - [Loại dữ liệu](#loại-dữ-liệu)
        - [Quy mô và khả năng mở rộng](#quy-mô-và-khả-năng-mở-rộng)
        - [Hiệu suất và thông lượng](#hiệu-suất-và-thông-lượng)
        - [Tính nhất quán và khả năng chịu lỗi](#tính-nhất-quán-và-khả-năng-chịu-lỗi)
        - [Bảo mật](#bảo-mật)
        - [Tích hợp và hỗ trợ](#tích-hợp-và-hỗ-trợ)
        - [Chi phí](#chi-phí)
        - [Tính dễ sử dụng và quản lý](#tính-dễ-sử-dụng-và-quản-lý)
        - [Ví Dụ](#ví-dụ)
      - [Khi nào nên dùng SQL và noSQL](#khi-nào-nên-dùng-sql-và-nosql)
        - [Khi nào nên dùng SQL](#khi-nào-nên-dùng-sql)
        - [Khi nào nên dung NoSQL](#khi-nào-nên-dung-nosql)
      - [Những dự án lớn người ta dùng DB nào](#những-dự-án-lớn-người-ta-dùng-db-nào)
        - [PostgreSQL](#postgresql-1)
        - [MongoDB](#mongodb-1)
      - [Cách sử dụng SQL trong các ứng dụng thực tế như thế nào](#cách-sử-dụng-sql-trong-các-ứng-dụng-thực-tế-như-thế-nào)
      - [Sự khác biệt giữa SQL và NoSQL](#sự-khác-biệt-giữa-sql-và-nosql)
        - [Ngôn ngữ truy vấn](#ngôn-ngữ-truy-vấn)
        - [Khả năng mở rộng](#khả-năng-mở-rộng)
        - [Mục đích sử dụng](#mục-đích-sử-dụng)
        - [Lựa chọn sử dung](#lựa-chọn-sử-dung)
        - [Mã nguồn](#mã-nguồn)
        - [ACID-BASE](#acid-base)
        - [Ưu điểm](#ưu-điểm)
        - [Nhược điểm](#nhược-điểm)


## Introduction

The purpose of this website aim to:

- Crawl data from multiple sources to analyze properties.
- Find virtual sale and recommend good price products.
- Analyze product's shop feedbacks with reviews.

## Get started

You can run on your baremetal or cloud platform with docker:

```docker
    docker compose up
```

To finish to setup datbase from docker container

For UNIX/LINUX

```sh
    ./finishsetup.sh 
```
For Windows

```ps
    .\finishsetup.sh 
```

**Note** make sure you uncomment following the instructions of above file to create super user for the first time.

In case, you have trouble about npm start docker, just run npm install in folder client first then run *docker compose* again.

## Wiki

You can find more details how this website works at this [wiki](https://github.com/trumpiter-max/remise/wiki). We notices some highlight links that you can follow to know more:

- [Design](https://github.com/trumpiter-max/remise/wiki/Design)
- [Diagram](https://github.com/trumpiter-max/remise/wiki/Diagram)

## Any problems

Feel free to open [issue](https://github.com/trumpiter-max/remise/issues) for any problems of this website.

## Members list
-	Lê Huy Hùng - 21520888
-	Lê Quốc Anh - 22520049
-	Cao Thị Kim Cẩm - 21520641
-	Trần Huỳnh Ngọc - 21522384

## Q & A

#### Cơ chế truy vấn trong  PostgreSQL, Mongo và mySQL. Sự khác biệt giữa SQL và NoSQL. Cách tối ưu hoá truy vấn trong cơ sở dữ liệu?

Tóm tắt:
```
PostgreSQL: Parser ->Rewriter->Planner/Optimizer ->Executor -> Result Sending 

MySQL: Parser->Preprocessor->Optimizer -> Query Execution -> Result Sending  

MongoDB: Query Parsing -> Query Optimization -> Query Execution -> Result Sending  

```

##### PostgreSQL

PostgreSQL là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) sử dụng SQL. Cơ chế truy vấn trong PostgreSQL bao gồm các bước sau:

Parser: Phân tích cú pháp của câu truy vấn và tạo ra cây cú pháp.
Planner/Optimizer: Tạo ra các kế hoạch thực hiện truy vấn dựa trên các thống kê và chi phí. Nó chọn kế hoạch tối ưu nhất.
Executor: Thực hiện kế hoạch đã chọn để truy xuất dữ liệu từ cơ sở dữ liệu.

##### MongoDB

MongoDB là một hệ quản trị cơ sở dữ liệu NoSQL dạng tài liệu. Cơ chế truy vấn của MongoDB sử dụng MongoDB Query Language (MQL):

Query Language: Sử dụng cú pháp JSON để thực hiện các truy vấn.
Query Planner: Lựa chọn kế hoạch thực hiện tốt nhất dựa trên các chỉ số và thống kê.
Execution Engine: Thực hiện truy vấn và trả về kết quả.

##### MySQL

MySQL cũng là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) sử dụng SQL. Cơ chế truy vấn trong MySQL tương tự PostgreSQL với các bước chính:

Parser: Phân tích câu truy vấn để kiểm tra cú pháp.
Optimizer: Tạo kế hoạch thực hiện tối ưu dựa trên các thống kê và chi phí.
Executor: Thực hiện kế hoạch để truy xuất dữ liệu từ cơ sở dữ liệu.
Cách tối ưu hoá truy vấn trong CSDL

##### Tối ưu hóa truy vấn SQL

Sử dụng chỉ số (Indexes): Tạo chỉ số cho các cột thường xuyên được sử dụng trong các câu truy vấn để giảm thời gian truy cập dữ liệu.

Hạn chế sử dụng SELECT: Chỉ lấy những cột cần thiết thay vì lấy tất cả các cột.
Sử dụng EXPLAIN: Sử dụng câu lệnh EXPLAIN để kiểm tra kế hoạch thực hiện của câu truy vấn và tìm cách tối ưu hóa.
Chia nhỏ truy vấn: Chia các truy vấn lớn thành các truy vấn nhỏ hơn nếu có thể.
Tối ưu hóa JOIN: Sử dụng các loại JOIN phù hợp và đảm bảo các bảng được JOIN có chỉ số hợp lý.

SỬ dụng cache cho database, đối với các record cần lưu trữ ít mà cần thiết thì có thể sử dụng in-memory cache còn lại thì sử dụng in-disk cache. Có thể sử dụng phương pháp này cho hệ thống NoSQL

##### Tối ưu hóa truy vấn NoSQL

Sử dụng đúng mô hình dữ liệu: Chọn mô hình dữ liệu phù hợp nhất với ứng dụng của bạn (dạng tài liệu, key-value, cột, đồ thị).

Tạo chỉ số phù hợp: Tạo chỉ số cho các trường thường xuyên được truy vấn.
Sharding: Phân mảnh cơ sở dữ liệu để phân tán tải và tăng tốc độ truy cập.
Caching: Sử dụng cache để giảm tải truy vấn trực tiếp đến cơ sở dữ liệu.
Batch Operations: Thực hiện các thao tác batch để giảm số lượng truy vấn đơn lẻ.
Tùy vào loại cơ sở dữ liệu và ứng dụng cụ thể, các phương pháp tối ưu hóa sẽ khác nhau. Tuy nhiên, hiểu rõ cơ chế truy vấn và cách hệ quản trị cơ sở dữ liệu hoạt động sẽ giúp bạn tối ưu hóa truy vấn một cách hiệu quả.

#### Nêu tiêu chí cụ thể để chọn 1 DBMS trong 1 dự án cụ thể

##### Loại dữ liệu

- Có cấu trúc hay không có cấu trúc: SQL (như PostgreSQL, MySQL) thường tốt cho dữ liệu có cấu trúc, NoSQL (MongoDB) thích hợp hơn cho dữ liệu không cấu trúc)
- Yêu cầu về lưu trữ dữ liệu dạng JSON, XML hay dạng khác? Ví dụ MongoDB hỗ trợ tốt hơn cho dữ liệu JSON.

##### Quy mô và khả năng mở rộng

- Dự án có quy mô lớn hay nhỏ? DBMS phải có khả năng  xử lý lượng dữ liệu lớn nếu cần.
- Yêu cầu về khả năng mở rộng ngang hay dọc: NoSQL thường dễ mở rộng ngang hơn

##### Hiệu suất và thông lượng

- Yêu cầu về độ trễ và thông lượng: DBSM phải đáp ứng các yêu cầu về hiệu suất của ứng dụng.
- Tần suất và phức tạp của các truy vấn: SQL thích hợp cho các truy vấn phức tạp, trong khi NoSQL có thể tốt hơn cho các truy vấn đơn giản và nhanh.

##### Tính nhất quán và khả năng chịu lỗi

- Yêu cầu về tính nhất quán mạnh mẽ hay tính nhất quán cuối? SQL thường  cung cấp tính nhất quán mạnh mẽ hơn, trong khi một số NoSQL cung cấp tính nhất quán cuối.
- Yêu cầu về khả năng chịu lỗi và phục hồi? DBMS phải có khả năng chịu lỗi tốt và dễ dàng khắc phục sau sự cố.

##### Bảo mật

- Yêu cầu về bảo mật dữ liệu? DBMS phải hỗ trợ các tính năng bảo mật.
- Khả năng bảo vệ dữ liệu bằng quyền truy cập, 

##### Tích hợp và hỗ trợ

- Khả năng tích hợp với các công cụ và hệ thống hiện có
- Sự hỗ trợ từ cộng đồng mạng và nhà cung cấp

##### Chi phí

- Chí phí triển khai vấn hành
- Mô hình chi phí nào phù hợp cho dự án

##### Tính dễ sử dụng và quản lý

- Độ phức tạp của việc cài đặt và quản lý DBMS
- Yêu cầu về công cụ quản lý và giám sát

##### Ví Dụ

Ví dụ 1: Ứng Dụng Thương Mại Điện Tử

Loại dữ liệu: Có cấu trúc (sản phẩm, đơn hàng), không cấu trúc (đánh giá của khách hàng).
Quy mô và mở rộng: Yêu cầu mở rộng ngang để xử lý lượng truy cập lớn.
Hiệu suất: Độ trễ thấp cho trải nghiệm người dùng tốt.
Nhất quán: Yêu cầu tính nhất quán mạnh mẽ để đảm bảo các giao dịch.
Bảo mật: Tuân thủ PCI-DSS.
Chi phí: Phải cân nhắc chi phí vận hành thấp.
Tích hợp: Tích hợp với các hệ thống thanh toán, vận chuyển.
Lựa chọn: MongoDB cho dữ liệu không cấu trúc và PostgreSQL hoặc MySQL cho dữ liệu có cấu trúc.

Ví dụ 2: Hệ Thống Phân Tích Dữ Liệu Lớn

Loại dữ liệu: Khối lượng lớn, không có cấu trúc.
Quy mô và mở rộng: Mở rộng ngang, yêu cầu khả năng xử lý dữ liệu lớn.
Hiệu suất: Thông lượng cao.
Nhất quán: Tính nhất quán cuối cùng có thể chấp nhận được.
Chi phí: Tối ưu chi phí lưu trữ và xử lý.
Lựa chọn: Apache Cassandra hoặc Google Bigtable.

#### Khi nào nên dùng SQL và noSQL

##### Khi nào nên dùng SQL 

Khi dữ liệu của bạn có cấu trúc và ít thay đổi, SQL là lựa chọn đơn giản nhất để giao tiếp với hệ thống quản lý cơ sở dữ liệu quan hệ. Nó cho phép bạn lưu trữ và truy xuất dữ liệu từ cơ sở dữ liệu một cách nhanh chóng và thực hiện các truy vấn phức tạp bằng cách sử dụng phép JOIN giữa các bảng. SQL cũng thích hợp cho việc phân tích, giúp bạn nắm bắt thông tin chi tiết về dữ liệu của mình. 

##### Khi nào nên dung NoSQL

Khi nói đến sử dụng cơ sở dữ liệu NoSQL, có một số tình huống cụ thể mà nó sẽ thích hợp: 
	
- Xử lý dữ liệu lớn và đa dạng: Khi tất cả các thành phần khác của ứng dụng máy chủ của bạn được thiết kế liền mạch, nhanh chóng, cơ sở dữ liệu NoSQL ngăn chặn dữ liệu khỏi bị nút cổ chai. Dữ liệu lớn là một trong những động lực chính khi sử dụng NoSQL, cho phép bạn thực hiện những việc mà cơ sở dữ liệu quan hệ quan hệ chưa làm được. 
	
- Lưu trữ khối lượng lớn dữ liệu phi cấu trúc và bán cấu trúc: Cơ sở dữ liệu NoSQL không giới hạn các loại dữ liệu mà bạn có thể lưu trữ cùng nhau và cho phép bạn thêm các loại dữ liệu mới khi nhu cầu thay đổi. Với cơ sở dữ liệu dựa trên tài liệu (Document base), bạn có thể lưu trữ dữ liệu ở một nơi mà không cần định nghĩa loại dữ liệu trước. 
	
- Tận dụng điện toán đám mây và lưu trữ: Lưu trữ trên đám mây là một giải pháp tiết kiệm chi phí tuyệt vời, nhưng yêu cầu dữ liệu phải được sẵn sàng, dễ dàng truy xuất trên nhiều máy chủ để mở rộng quy mô. 
	
- Không cần hỗ trợ ACID: Nếu ứng dụng của bạn không đòi hỏi tính ACID cho giao dịch dữ liệu, NoSQL có thể là lựa chọn tốt. NoSQL thường chấp nhận tính linh hoạt hơn trong việc xử lý dữ liệu. 
	
#### Những dự án lớn người ta dùng DB nào

Tóm tắt:
```
MySQL: Facebook, Twitter, Airbnb, Booking.com, Uber, GitHub, YouTube, etc.

PostgreSQL: Instagram, Uber, Netflix, Reddit, etc.

MongoDB: Facebook, Nokia, eBay, Adobe, Google, etc.

```

##### PostgreSQL

- Ưu điểm: Hỗ trợ tốt cho các giao dịch phức tạp, tính toàn vẹn dữ liệu, các tính năng nâng cao như JSONB để lưu trữ dữ liệu không có cấu trúc.
- Ví dụ sử dụng: Uber, Instagram, Reddit.
MySQL
- Ưu điểm: Hiệu suất cao, dễ dàng cài đặt và quản lý, phổ biến với cộng đồng lớn.
- Ví dụ sử dụng: Facebook (sử dụng cho các dịch vụ khác nhau), Twitter (ban đầu).

##### MongoDB

- Ưu điểm: Linh hoạt với dữ liệu không có cấu trúc, dễ dàng mở rộng ngang (horizontal scaling).
- Ví dụ sử dụng: eBay, LinkedIn.

#### Cách sử dụng SQL trong các ứng dụng thực tế như thế nào
			1. thực hiện kết nối cơ sở dữ lieu
			2. Thực hiện các câu truy vấn (select, insert, update, delete)
			3. Sử dung SQL trong code ứng dung
			4. Tối ưu hoá câu truy vấn

#### Sự khác biệt giữa SQL và NoSQL
Loại hình:

- SQL databases là cơ sở dữ liệu dựa trên bảng và các bảng này có quan hệ với nhau. 
- NoSQL databases có thể dựa trên nhiều hướng lưu trữ khác nhau: document-oriented, column-oriented, graph-based,…

##### Ngôn ngữ truy vấn

- Sử dụng SQL để truy vấn và quản lý dữ liệu. Các câu lệnh như SELECT, INSERT, UPDATE, DELETE được sử dụng để tương tác với dữ liệu. 
- Ngôn ngữ truy vấn đa dạng. Các cơ sở dữ liệu NoSQL sử dụng các ngôn ngữ truy vấn không phải là SQL. 

##### Khả năng mở rộng

- Cơ sở dữ liệu SQL có thể được thu nhỏ theo chiều dọc, được mở rộng bằng cách tăng lưu lượng phần cứng.
- Được tùy biến theo chiều ngang, mở rộng bằng cách tăng số lượng máy chủ cơ sở dữ liệu. 

##### Mục đích sử dụng

- Được thiết kế dành cho các ứng dụng xử lý giao dịch trực tuyến, trong giao dịch có độ ổn định cao và thích hợp để xử lý phân tích trực tuyến. 
- Được thiết kế phục vụ cho việc phân tích dữ liệu có cấu trúc chưa hoàn chỉnh. 

##### Lựa chọn sử dung

sql:
- Dữ liệu có mối quan hệ phức tạp. 
- Yêu cầu về tính ACID và tính toàn vẹn dữ liệu cao. 
- Lược đồ cố định, được định rõ trước. 

nosql:
- Dữ liệu bán cấu trúc và phi cấu trúc. 
- Khả năng mở rộng nhanh chóng. 
- Hiệu suất cao cho đọc và ghi. 
- Lược đồ động, linh hoạt và có thể thay đổi. 

##### Mã nguồn

- Kết hợp của các mã nguồn mở như Postgres & MySQL và thương mại như Oracle Database. 
- Open-source. 
Hiệu suất:
- Hiệu suất thường tốt cho các truy vấn liên quan đến mối quan hệ giữa các bảng. 
- Hiệu suất cao trong việc truy cập và cập nhật toàn bộ document hoặc các trường cụ thể trong document

##### ACID-BASE

- ACID (Atomicity, Consistency , Isolation, Durability) là một chuẩn cho RDBMS 
- BASE (Basically Available, Soft State, Eventually Consistent) là một mô hình của nhiều hệ thống NoSQL

##### Ưu điểm

sql:
- Hỗ trợ ACID (Atomicity, Consistency, Isolation, Durability), đảm bảo tính toàn vẹn và nhất quán của dữ liệu. 
- Truy vấn dữ liệu dễ dàng và linh hoạt với ngôn ngữ truy vấn SQL chuẩn. 
- Dữ liệu có cấu trúc, giúp giảm thiểu việc lặp lại thông tin và tối ưu hóa hiệu suất truy vấn.  

nosql
- Hỗ trợ quy mô lớn và dễ dàng mở rộng hệ thống. 
- Được thiết kế để xử lý dữ liệu bán và phi cấu trúc và linh hoạt trong việc thay đổi cấu trúc dữ liệu. 
- Hiệu suất cao khi truy vấn dữ liệu lớn và phức tạp. 

##### Nhược điểm

sql:
- Hạn chế trong việc mở rộng quy mô lớn và xử lý dữ liệu phi cấu trúc. 
- Khó khăn trong việc thay đổi cấu trúc dữ liệu khi ứng dụng phát triển.

nosql
- Không hỗ trợ đầy đủ các tính năng ACID, có thể dẫn đến sự không nhất quán và toàn vẹn trong một số tình huống. 
- Cú pháp truy vấn và tương tác với dữ liệu phức tạp hơn so với SQL.  