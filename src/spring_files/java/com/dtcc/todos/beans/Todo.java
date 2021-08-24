package com.dtcc.todos.beans;

import lombok.Data;

import java.util.Date;
import java.util.Objects;

@Data
public class Todo {
    private long id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

    //Required
    public Todo(){

    }
    public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
        super();
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Todo todo = (Todo) o;
        if(id!=todo.id)
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime=31;
       int result=1;
       result=prime*result+(int) (id^(id>>>32));
       return result;
    }
}
