const Todo = (config, DataTypes) => {
    const model = config.define(
      'Todo',
      {
        todoId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        todoContent: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        todoDone: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }
      },
      {
        tableName: 'todo',
        freezeTableName: true,
        timestamps: true,
      }
    );
  
    return model;
  };
  
module.exports = Todo;
  