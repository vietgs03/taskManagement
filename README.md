# taskManagement
# Phân tích yêu cầu
	1. Tạo tác vụ : Người dùng có thể tạo tác vụ với các thông tin như tiêu đề , Mô tả , thời hạn ,mức độ ưu tiên .
	2. Quản lý tác vụ : Người dùng có thể xem danh sách tác vụ hiện có và tìm kiếm tác vụ dựa trên các tiêu chí như tiêu đề , thời hạn, mức độ ưu tiên .
		1. Cung cấp các bộ lọc sắp xếp tác vụ dựa trên thuộc tính như thời gian hoàn thành , mức độ ưu tiên và trạng thái 
		2. Người dùng có thể cập nhập thông tin tác vụ
		3. Đánh dấu tác vụ đã hoàn thành và xoá tác vụ không  cần thiết 
	3. Giao tiếp và thông báo 
		1. Cung cấp chức năng gửi thông báo hoặc email cho người dùng khi có tác vụ mới hoặc khi có sự thay đổi đáng quan tâm 
		2. Cho phép bình luận trong tác vụ
			1. Trong bình luận có tệp đính kèm 
	4. Báo cáo và thống kê
			1. Tạo 1 báo cáo thống kê tổng quan về tình trạng tác vụ , thời gian , ưu tiên 
			2. Cung cấp thống kê , biểu đồ để hiển thị các thông tin quan trọng về hiệu suất công việc và tiến độ.
	5. Quyền truy cập và phân quyền .
		1. Xác định các vai trò người dùng và phân quyền truy cập cho từng vai trò .
		2. Đảm bảo rằng chỉ những người dùng được quyền hạn truy cập mới có thể xem và chỉnh sửa tác vụ .
	6. Giao diện người dùng .
# Phân tích bổ sung :
			1. Tính năng lịch trình : Cho phép người dùng lập lịch cho các tác vụ, đặt thời gian bắt đầu , thời gian kết thúc , thời gian nhắc nhở và thời gian hoàn thành dự kiến .
			2. Tính năng theo dõi thời gian : Cho phép người dùng theo dõi thời gian đã dành cho mỗi tác vụ, Thời gian còn lại và thời gian đã hoàn thành .
			3. Tính năng hồ sơ người dùng
			4. Tính năng phân loại tác vụ
			5. Đa ngôn ngữ 
			6. Xuất file
			7. tích hợp j j đó ////
# Phân tích database 
	1. Bảng User 
		1. rowid (PK)
		2. uName 
		3. password
	2. Bảng Task
		1. rowid (PK)
		2. title
		3. description
		4. deadline
		5. priority
		6. status
		7. createdBy (FK - Users.rowid)
		8. assignedTo (fk - Users.rowid)
	3. Bảng Comments
		1. rowid (PK)
		2. taskId (FK Tasks.rowid)
		3. userid (FK Users.rowid)
		4. comment
		5. attachment
	4. Bảng Notifications
		1. rowid (PK)
		2. taskID (FK tasks.rowid)
		3. userID (FK Users.rowid)
		4. message
		5. createdDate
	5. Bảng Schedules
		1. rowid (PK)
		2. taskid (FK Tasks.rowid)
		3. startTime 
		4. endTime
		5. reminderTime
		6. expectedCompletionTime
	6. Bảng TaskCategories
		1. rowid (PK)
		2. categoryName
	7. Bảng Userprofiles
		1. rowid (PK)
		2. userID
		3. firstName
		4. lastName
		5. email
		6. avatar
	8. Languages
		1. rowid (PK)
		2. LanguageName
	9. Taskfile
		1. rowid (PK)
		2. taskID (FK tasks.rowid)
		3. filePath
Các quan hệ như sau :
	- Bảng "Tasks" có quan hệ n-1 với bảng "Users" thông qua field "CreatedBy" và "assignedTo"
	- Bảng "Comments" có quan hệ n-1 với bảng "Tasks" và "Users"
	- Bảng "Notifications" có quan hệ n-1 với bảng "Tasks" và "Users"
	- Bảng "Schedules" có quan hệ 1-1 với  bảng "Tasks"
	- Bảng "UserProfiles" Có quan hệ 1-1 vói8 bảng "Users"
	- Bảng "Languages" có quan hệ n-1 "Users"
	- Bảng "TaskFiles" có quan hệ n-1 với bảng "Tasks"

	
