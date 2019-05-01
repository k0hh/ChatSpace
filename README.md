
」
「
＾「＠# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|email|integer|null: false, unique: true|
|password|integer|null: false|

### Association
- has_many :groups, through: :members 
- has_many :members
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
  

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

