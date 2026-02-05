# Bismillahirahmanirahim
# Elhamdulillahi rabbil 'alamin
# Esselatu vesselamu 'ala nabiina muhammadin
# SuphanAllahi wa bihamdihi, subhanallahil azim
# La hawla wa la quwwata illa billahi al 'aliyyil azim
# la ilaha illallahu wahdahu la sharika lahu, lahul mulku wa lahul hamdu wa huwa 'ala kulli shay'in qadir

CXX = g++
LIBS = -lGL -lglfw
INCLUDES = -Iinclude
CFLAGS = -Wall -O2 -std=c++11 -pipe -DDEBUG
LFLAGS = -pthread

SRCS = src/cube.cpp \
	   src/cube4.cpp \
	   src/viewer_gl.cpp \
	   src/algo_krof.cpp \
	   src/algo_kociemba.cpp

EXAMPLE_SRCS = example/solver.cpp
EXAMPLE_OBJS = $(EXAMPLE_SRCS:.cpp=.o) 

OBJS = $(SRCS:.cpp=.o) $(EXAMPLE_OBJS)

EXE_NAME = solver

.PHONY: clean

all: example

example: $(OBJS)
	$(CXX) $(CFLAGS) $(LFLAGS) $(OBJS) $(LIBS) -o $(EXE_NAME)

.cpp.o:
	$(CXX) $(CFLAGS) $(INCLUDES) -c $< -o $@

clean:
	rm -v $(OBJS) $(EXE_NAME)
