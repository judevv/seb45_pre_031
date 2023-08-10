package com.codestates.stackoverflowbe.user.entity;

import com.codestates.stackoverflowbe.answer.entity.Answer;
import com.codestates.stackoverflowbe.audit.BaseTimeEntity;
import com.codestates.stackoverflowbe.vote.entity.Vote;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String username;
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    @OneToOne()
    @JoinColumn(name = "VOTE_ID")
    private Vote vote;
}
