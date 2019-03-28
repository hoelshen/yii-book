<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "booklist".
 *
 * @property int $id
 * @property string $bookName
 * @property string $author
 * @property string $price
 * @property int $bookTypeId
 */
class Book extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'booklist';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['price'], 'number'],
            [['bookTypeId'], 'integer'],
            [['bookName'], 'string', 'max' => 20],
            [['author'], 'string', 'max' => 10],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'bookName' => 'Book Name',
            'author' => 'Author',
            'price' => 'Price',
            'bookTypeId' => 'Book Type ID',
        ];
    }
}
