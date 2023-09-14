import React from 'react';
import { Foldout } from '../foldout/Foldout';
import { OfferedSchemes } from './OfferedSchemes';
import { RateCard } from './RateCard';

export function GCSESupport() {
    return <section className="row topic" id="gcse-support">
        <h3>GCSE Support for Edexcel or AQA</h3>
        <OfferedSchemes />
        <p>For GCSE students, I offer targeted support for Edexcel or AQA exam boards. Tutoring services are available both online and in person, providing students with a head start for the school year. </p>
        <p>I can also offer catch-up and re-cap sessions for A-Level and AS-Level prep. As well as free-form or structured sessions for interested students not wishing to take an exam.</p>

        <RateCard />


        <Foldout text="What I can Cover?">
            <p>Together we can cover or re-cap as needed</p>
            <ul>
                <li><strong>Flowcharts</strong></li>
                <li><strong>Boolean Logic</strong><ul>
                    <li>AND, OR, NOT, XOR</li>
                    <li>Building a half-adder, multiplexer etc.</li>
                </ul>
                </li>
                <li><strong>Binary</strong><ul>
                    <li>conversion to and from decimal</li>
                </ul>
                </li>
                <li><strong>What is a computer and how to they work.</strong><ul>
                    <li>State Machines, Regular Expressions and Regular Languages, Pushdown Automata</li>
                    <li>Turing Machines</li>
                    <li>Von-Neumann Architecture</li>
                </ul>
                </li>
                <li><strong>Variables, Constants and Expressions:</strong> Make the computer do simple math.<ul>
                    <li>Variable and Constant declarations</li>
                    <li>Assignment</li>
                </ul>
                </li>
                <li><strong>Flow and Control:</strong> Use computers to make decisions which affect program output.<ul>
                    <li><em>if</em> Statements</li>
                    <li><strong><em>for</em></strong> loops</li>
                    <li>subroutines / function calls</li>
                    <li>switch/case</li>
                    <li>conditional and relational expressions (and, or, not) (&gt;, &lt;, ==,…)</li>
                </ul>
                </li>
                <li><strong>Data Types</strong>: What are they and how to choose between them<ul>
                    <li>Integers</li>
                    <li>Real Numbers</li>
                    <li>Booleans</li>
                    <li>Strings and Arrays</li>
                    <li>Arrays in Two Dimensions</li>
                </ul>
                </li>
                <li><strong>Data Structures:</strong><ul>
                    <li>Hashing and Indexing</li>
                    <li>Graphs, Trees and Lists</li>
                    <li>Searching and Storing data Efficiently</li>
                </ul>
                </li>
                <li><strong>Reading and Writing to Files</strong></li>
                <li><strong>Refactoring and Restructuring Code</strong><ul>
                    <li>Functional Decomposition</li>
                    <li>Abstraction</li>
                </ul>
                </li>
            </ul>
        </Foldout>
    </section>;
}
